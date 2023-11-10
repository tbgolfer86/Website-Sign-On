require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  try {
  // Launches the non-headless browser version that comes with Puppeteer
  const browser = await puppeteer.launch({ headless: false });

  // Visits the web page specified
  const page = await browser.newPage();
  await page.goto('https://github.com/login'); // Replace with login page URL

  // Fills out the login form
  await page.type('input[name="login"]', process.env.USERNAME); // Replace with site's username field selector
  await page.type('input[name="password"]', process.env.PASSWORD); // Replace with site's password field selector

  // Submits the login form
  await page.click('input[name="commit"]'); // Replace with site's login button selector

} catch (error) {
  console.error('An error occurred:', error);
}

})();
