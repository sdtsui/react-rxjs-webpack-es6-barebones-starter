var express = require('express');
express().use('/',express.static(__dirname)).listen(9000);
console.log("Listening on 9000...");