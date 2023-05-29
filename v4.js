const{Builder, By, key, util} = require("selenium-webdriver");
async function dropdown() {
    let driver = await new Builder().forBrowser("firefox").build();
    try{
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
   const select1= await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
   select1.click();
    await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
    select1.click();
    await driver.findElement(By.xpath("//nb-option[@value='2']")).click();
    select1.click();
    await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="0: 'volvo'"]`)).click();
    await driver.findElement(By.xpath(`//select[@formcontrolname='select2']/option[@value="2: 'opel'"]`)).click();
    const select3= await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button"));
    select3.click();
    await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
    select3.click();
    const select4 =await driver.findElement(By.xpath("//select[@formcontrolname='select4']/button"));
    select4.click();
    await driver.findElement(By.xpath("//select[@formcontrolname='select4']/option[@value='volvo']")).click();
    select4.click();
     await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
} catch(error){
    console.log(error)

    }
}
dropdown();