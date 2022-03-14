# File Upload Module

 - 抽象化介面, 後面實作不同接點 ( 如 GCS )
 - 提供純前端上傳 ( 傳至其它解決方案時不透過主機 )
 - 所有檔案儲存逆向參考, 指向參考者. 可用來清除不再使用的節點.
 - 權限怎麼辦? User A 上傳 File B 至 Project C, Project C 的 co-author User D 應該要可以讀寫 File B?

schema

file {
  id text ( suuid )
  size int
  name text
  type text
}

file-belongs-to {
  type text, ( which table )
  key text,  ( key of that table )
  file text  ( file key )
}
