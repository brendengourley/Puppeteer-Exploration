const puppeteer = require('puppeteer');

( async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.amazon.com/Best-Sellers-Electronics-Televisions/zgbs/electronics/172659')
  const names = await page.$$eval('.p13n-sc-truncated', items => {
    return items.map( item => item.textContent )
  })
  const prices = await page.$$eval('.p13n-sc-price', items => {
    return items.map( item => item.textContent )
  })
  Object.entries(names).forEach((key, value) => {
    console.log(`Product: ${key[1]}\n       Price: ${prices[value]}`)
  })
  await browser.close()
} )();
