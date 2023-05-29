const { Builder, By, } = require("seleniumwebdriver");
const driver = new Builder()
 .forBrowser("firefox")
 .build();
