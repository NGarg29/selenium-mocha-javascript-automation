import { Builder, By, until } from "selenium-webdriver";
import 'mocha';

describe('You Tube Test', async ()=> {
    let driver: any;
    before(async() => {
        driver = await new Builder().forBrowser('chrome').build();
        driver.get('https://www.youtube.com/');
        await driver.manage().window().maximize();
    });

    it('Login', async () => {
        const SignInButton = '(//*[@aria-label="Sign in"])[1]';
        const Email =  'input[type="email"]';
        const Next = 'div[id="identifierNext"]';
        const Password = 'input[type="password"]';
        const PasswordNext = 'div[id="passwordNext"]';
        const Continue = '//span[text() = "Continue"]';
        await driver.findElement(By.xpath(SignInButton)).click();
        await driver.findElement(By.css(Email)).click();
        await driver.findElement(By.css(Email)).sendKeys('n48158513@gmail.com');
        await driver.findElement(By.css(Next)).click();
        await driver.wait(until.stalenessOf(driver.findElement(By.css(Password))));
        let passwordField = await driver.findElement(By.css(Password));
        await passwordField.sendKeys('Neha@2929');
        await driver.findElement(By.css(PasswordNext)).click();
    });
});


