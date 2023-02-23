import puppeteer from "puppeteer"

console.log(`buscando Cotação do Real Brasileiro...`)

async function firstBot() {

  const browser = await puppeteer.launch({ headless: false })// true é padrão
  const page = await browser.newPage()

  const baseCurrency = 'dolar'
  const endCurrency = 'real'

  await page.goto(`https://www.google.com/search?q=${baseCurrency}+para+${endCurrency}&rlz=1C1FC
  XM_pt-PTBR995BR995&sxsrf=AJOqlzWMpa8Eo2kYyhneereGjB7GVmsVSg%3A1677128797
  718&ei=XfT2Y87GK7ne1sQPi8qSiAw&ved=0ahUKEwiO6evR76r9AhU5r5UCHQulBME
  Q4dUDCA8&uact=5&oq=${baseCurrency}+para+${endCurrency}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCAAQg
  AQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgA
  EIAEMgUIABCABDIFCAAQgAQ6BAgjECc6CggAELEDEIMBEEM6BAgAEEM6FAguEIAEELEDEIMBE
  McBEK8BENQCOggIABCxAxCDAToICAAQgAQQsQM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEAo6
  CggAEIAEELEDEApKBAhBGABQAFjHDmDwEGgAcAF4AIABbogB8wuSAQM2LjmYAQCgAQHAAQE&
  sclient=gws-wiz-serp`)

  const result = await page.evaluate(() => {
    return document.querySelector('.lWzCpb.a61j6').value
  })

  console.log(`o valor de 1 ${baseCurrency} para ${endCurrency} é de ${result}`)

  await browser.close()
}

firstBot()