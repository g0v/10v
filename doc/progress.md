# Progress


## Status of each component

 [v] Version Control
 [ ] Infrastructure
 [ ] Architecture
 [ ] Repo Structure
 [ ] Customer Flexibility
 [ ] Account Management 
 [ ] I18n
 [ ] Modules
 [ ] API
 [ ] Security
 [ ] Test Integration


## Note

 - 基本 server 啟動碼
   * csp
     - 考慮由 nginx 提供 default, server route 提供 overwrite, 透過 `map` + `$sent_http_*` 來實作.
   * cors

 - error handling
   * autocatch 待整理
   - 全面使用 lderror 處理錯誤. 
   - 捕抓並紀錄 uncaught rejection / unhandled exception 
   - 包覆 db error, 以便確認出錯位置

 - route ( 待規畫 )
 - config
   - 待說明文件
 - building
 - db ( 重新整理過, 加強 exception handling & pooling & pg version )
 - logging
   * log rotation + backup
   - 使用 pino 與 pino-http 紀錄細節. 分組並使用 pino-pretty + tee 輸出至 console & 檔案.
   - nginx log 的 ip address 需要確認是否能取得 cloudflare 提供的原始 ip
 - performance
   * 效能工具組
   - cannon 測時間
 - test
   - 使用 mocha + nyc, 其它待查.
 - deploy
   - 使用 docker + docker-compose. 檔案置於 config/docker 下.
   - ( 待確認 volume 用法, config/secret/log 等如何管理, db 怎麼配置 )
