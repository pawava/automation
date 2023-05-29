const{Builder, By, key, util} = require("selenium-webdriver");
async function smilerg() {
    let driver = await new Builder().forBrowser("firefox").build();
    try{
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
    await driver.findElement(By.name("email")).sendKeys("santu123key@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("1234565");
    await driver.findElement(By.id("submit")).click();


} catch(error){
    console.log(error)

}
}
smilerg();