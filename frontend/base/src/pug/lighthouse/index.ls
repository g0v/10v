({core}) <- ldc.register <[core]>, _
<- core.init!then _
<- core.auth.fetch!then _

view = new ldview do
  root: document.body
  text: content: -> "Hello World!"
