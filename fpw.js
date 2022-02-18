const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--no-sandbox'],
            ignoreDefaultArgs: ['--disable-extensions'],
        });
        const page = await browser.newPage();
        await page.goto('https://fpw-bs.avmobility.io/en-us');
        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body);

        fs.writeFile(`./public/home_page.html`, body, err => {
            if (err) {
                console.error(err)
                return;
            }
        });

        await page.click('#root > div.header-topbar-container > div > div > div > ul > li.linkContainer.active > a');

        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body1 = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body1);

        // https://bkohli1010.github.io/en-us/fleet-vehicles

        fs.writeFile(`./public/fleet-vehicles.html`, body1, err => {
            if (err) {
                console.error(err)
                return;
            }
        });



        await page.click('#root > div.header-topbar-container > div > div > div > ul > li:nth-child(2) > a');

        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body2 = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body2);

        fs.writeFile(`./public/intelligence-full.html`, body2, err => {
            if (err) {
                console.error(err)
                return;
            }
        });


        await page.click('#root > div.header-topbar-container > div > div > div > ul > li:nth-child(3) > a');

        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body3 = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body3);

        fs.writeFile(`./public/charging.html`, body3, err => {
            if (err) {
                console.error(err)
                return;
            }
        });


        await page.click('#root > div.header-topbar-container > div > div > div > ul > li:nth-child(4) > a');

        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body4 = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body4);

        fs.writeFile(`./public/service.html`, body4, err => {
            if (err) {
                console.error(err)
                return;
            }

        });


        await page.click('#root > div.header-topbar-container > div > div > div > ul > li:nth-child(5) > a');

        await page.waitForSelector('.header-topbar-container', { timeout: 5000 });

        const body5 = await page.evaluate(() => {
            return document.querySelector('html').innerHTML;
        });
        // console.log(body5);

        fs.writeFile(`./public/financing.html`, body5, err => {
            if (err) {
                console.error(err)
                return;
            }

        });

        await browser.close();
    } catch (error) {
        console.log('error: ', error);
    }
})();
