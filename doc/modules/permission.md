# Permission subsystem

AC stands for `access control`.

 - IAM - Identity and Access Management
 - ACL - access control list. list over a object like [{user: {}, action: []}, ...]
 - MAC - https://en.wikipedia.org/wiki/Mandatory_access_control - policy centralized to admin.
 - DAC - https://en.wikipedia.org/wiki/Discretionary_access_control - at owner's discretion
 - RBAC - https://en.wikipedia.org/wiki/Role-based_access_control
   - user -> role -> specific permission
   - 3 primary rules: 
     - Role assignment - user can only do something if they are assigned a role for that.
     - Role authorization - user can only be a role if authorized.
     - Permission authorization - action must be authorized to be granted to a role.
   - with subrole, RBAC can be used to implement LBAC ( Lattice BAC )
 - RSBAC - RuleSet-Based AC
 - ABAC - https://en.wikipedia.org/wiki/Attribute-based_access_control
   - also as PBAC / CBAC
   - access granted based on attrs ( user, resource, env, etc )
   - support boolean logic
 - OrBAC - https://en.wikipedia.org/wiki/Organisation-based_access_control


# Available Modules

 - accesscontrol: https://github.com/onury/accesscontrol

# Design

 - 權限可以很複雜. 如, 讀取 prj data 時:
   - read prj data
    - reject if !stage.brd.prj-edit
      - except perm.brd.prj-edit-own
    - reject if !prj.owner
      - except brd.owner
 - 簡化形式:
   - read-prj-data
   - brd.owner: [v] read-prj-data
   - prj.owner@judge: [ ] read-prj-data
 - 集中/抽象化權限, 並使用函式處理(稱為權限函式, pfunc)
   - pfunc 不定義函式細節. 應集中管理或可用特定程式列出清單.
   - 使用範例: app.get "/prj/:id", perm.prj.read, -> ...
     - `perm.prj.read` 能做一般 api 都可以做的事. 也因此給了相當大的彈性.
 - 基於上者, 我們仍可以使用抽象 / 設計過後的 AC 系統來處理. 這給了權限系統彈性, 但又不失結構化.
 - 以我們的實例來說, 必須使用ABAC 形式的 AC system. 系統的基本要件:
   - obj - 可從定義的物件(obj) 中取得屬性 -> 需要 getter({id, ...})
   - role - 仍然需要定義 role, 或者說 role 也是一種物件.
   - action - 有我們想做的動作, 才能延伸對應動作需要的權限 ( by obj/attr, abac )
     - 如: perm.prj.read: {role: admin, time: am, prj: ... }
     - 我們可以進一步 break down action. 例如, prj.read = api.get('prj/slug') + api.get('prj/meta') ...
       - 這樣的話, 若可以 perm.prj.read 就代表可以 api.get('prj/slug'), ...
       - 或者, api.get('prj/slug') 若無定義誰能使用, 就往上溯至 prj.read 確認.
   - partial action - 我們也可以限制 action 執行的比例
     - 這個概念有點難想像, 但其中一種例子:
       - 特定用戶只能更新文件的其中一部份
       - moderator 僅能加註, 不能編輯 ( 更適合傳回 perm.prj.comment ? )
       - 專案資訊一般人只能讀公開的部份
     - 也許就在 action test 後傳回值裡做手腳, 比方說 true/false = 全開/全關, { .. } 代表(視內容)部份開關.
   - 反向操作. 列出物件, 濾出有權限的
     - 列表還要過 AC 會變得很沒效率 + 複雜. 因為通常我們是 query + offset + limit from DB, 
       若要過 AC 就代表我們得用某種方法把 AC 代進 SQL, 不然就是要全 query 後再 filter.
     - 因此, listing 也許要用比較簡單的形式來處理, 或者, 至少做個 cache 之類的.


權限
 - lv0 - 以「使用這個東西的權限」定義. 例如: api.get('prj/slug')
 - lv1 - 以「動作」定義. 例如: prj.read. lv1 可用 lv0 定義 ( 可以 prj.read = 能存取 api.get('prj/slug' )
 - lv2 - 以「角色」定義. 例如: prj.owner, brd.owner. lv2 可用 lv1 與 lv0 定義. ( admin 可以 prj.read + api.post .. )
 - lv3 - 以「階段」定義. 例如: opencall. lv3 用來修飾 lv2.
   - 在不同的 lv3, lv2 設定的 lv1 / lv0 可能會變. 比方說:
     prj.owner@default: prj.read
     prj.owner@opencall: prj.edit, prj.read
     prj.owner@judge: prj.review, prj.read
   - 也可以只在特定階段才生效的角色



prj
  get({id, ...}) -> 
  action: do
    create:
      role: admin, grant: true, priority: 2
      role: banUser, grant: false, priority: 1
      role: default, priority: 1, grant: (prj)->
        
    read
    update
    delete
    clone
    comment
    ...



