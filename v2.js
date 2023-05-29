const{Builder, By, key, util} = require("selenium-webdriver");
async function radio() {
    let driver = await new Builder().forBrowser("firefox").build();
    try{
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
    await driver.findElement(By.xpath("//input[@id='title']")).sendKeys("titledgsdshydshhdushuisixsghjxjsdgdsyhdhsiu");
    await driver.findElement(By.xpath("//input[@name='description']")).sendKeys("descriptionfgxdsxsgsyugsysxgsyxsixsyxggys");
    await driver.findElement(By.xpath("(//span[@class='custom-control-indicator'])[1]")).click();
    await driver.findElement(By.xpath("(//button[@id='submit'])[1]")).click();
    



} catch(error){
    console.log(error)

    }
}
radio();