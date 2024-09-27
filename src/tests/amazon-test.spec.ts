import 'mocha';
import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Amazon Test', async () => {
    let driver: any;
    
    before(async() => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.amazon.in');
        await driver.manage().window().maximize();
    });
    
    after(async () => {
        await driver.quit();
    });
    
    it('verify highest prize of mobiles made by amazon is greater than 1000', async () => {
        const mobiles = '//a[contains(@href,"mobile-phones")]';
        await driver.wait(until.elementLocated(By.xpath(mobiles)), 5000);
        await driver.findElement(By.xpath(mobiles)).click();
        const amazonBrand = '//a/span[text()="Made for Amazon"]';
        await driver.wait(until.elementLocated(By.xpath(amazonBrand)), 5000);
        await driver.findElement(By.xpath(amazonBrand)).click();
        await driver.wait(until.elementLocated(By.xpath('//div[contains(@class,"s-messaging-widget-results-header")]')), 5000);
        const priceLocator = '//span[@class="a-price-whole"]';
        const list = await driver.findElements(By.xpath(priceLocator));
        const prices = [];
        for(const price of list){
            const priceText = await price.getText();
            prices.push(priceText);
        }
        const numberValues = prices.map(price => Number(price.replace(',', '')) );
        console.log(numberValues);
        const largestNumber = Math.max(...numberValues);
        console.log(largestNumber);
        expect(largestNumber).greaterThan(1000);
    });
});