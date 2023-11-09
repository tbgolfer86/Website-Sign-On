require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  try {
  const browser = await puppeteer.launch({ headless: false }); // Launch a non-headless browser for debugging

  const page = await browser.newPage();
  await page.goto('https://github.com/login'); // Replace with the login page URL

  // Locate the username and password fields and input your credentials
  await page.type('input[name="login"]', process.env.USERNAME);
  await page.type('input[name="password"]', process.env.PASSWORD);

  // Submit the login form
  await page.click('input[name="commit"]'); // Replace with the login button selector

  // Wait for the login to complete 
  await page.waitForNavigation();

} catch (error) {
  console.error('An error occurred:', error);
}
})();
