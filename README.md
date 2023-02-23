# BOT com Javascript

utilizando a lib "puppeteer" para criar automação usando node.js e buscar a cotação do dolar para real brasileiro.

``npm i puppeteer``

para selecionar o valor da pagina, basta inspecionar a class do Input no navegador, e chama-lo 
com ``document.querySelector('')`` , dentro do metodo ``.evaluate`` da lib puppeteer.

## Atualização:

``npm i readline-sync`` 

para "conversar" com bot pelo terminal e escolher (x moeda para y moeda) a ser cotada.

com o readline-sync o bot fica bem mais dinâmico.

![fotoprojetorobo1](https://user-images.githubusercontent.com/114265734/220841804-ee91910d-f9ea-4d31-8d05-c006d1a3ed29.png)

![fotoprojetorobo2](https://user-images.githubusercontent.com/114265734/220841812-c2ddea99-491a-43fb-805a-efb4b0f30fb0.png)
