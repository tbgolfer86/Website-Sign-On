const puppeteer = require('puppeteer');

(async () => {
  try {
  const browser = await puppeteer.launch({ headless: false }); // Launch a non-headless browser for debugging

  const page = await browser.newPage();
  await page.goto(''); // Replace with the login page URL

  // Locate the username and password fields and input your credentials
  await page.type('input[name="login"]', '');
  await page.type('input[name="password"]', '');

  // Submit the login form
  await page.click('input[name=""]'); // Replace with the login button selector

  // Wait for the login to complete 
  await page.waitForNavigation();

} catch (error) {
  console.error('An error occurred:', error);
}
})();
