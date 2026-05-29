#!/usr/bin/env node
(function(){
  var suuid;
  suuid = require("../dist/index");
  console.log(suuid());
}).call(this);
