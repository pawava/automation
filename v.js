const{Builder, By, key, util} = require("selenium-webdriver");
async function examples() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.facebook.com/");
    await driver.findElement(By.name("email")).sendKeys("123@gmail.com");
    await driver.findElement(By.name("pass")).sendKeys("123");
    await driver.findElement(By.xpath("//button[@name='login']")).click();
}
examples();