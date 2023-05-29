const{Builder, By, key, util} = require("selenium-webdriver");
async function radio() {
    let driver = await new Builder().forBrowser("firefox").build();
    try{
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
    await driver.findElement(By.xpath("//input[@id='name'][1]")).sendKeys("Vikash kumar");
    await driver.findElement(By.xpath("//input[@id='comment'][1]")).sendKeys("34454");
    await driver.findElement(By.xpath("//span[text()='One-Bedroom Apartment']")).click();
    await driver.findElement(By.xpath("//span[text()='Breakfast']")).click();
    await driver.findElement(By.xpath("//button[@name='submit']")).click();
    
} catch(error){
    console.log(error)

    }
}
radio();