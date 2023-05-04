//os códigos estão comentados abaixo pq ao transferir para o storage bunny, surgiu novas oportunidades e erros que o storage apresenta, então dependendo da hospedagem as regras precisam ser modificadas.
//vou precisar reverter novamente, pois o google ads não está aprovando pq a bosta da apple desativa os js dos iphones

var keyword = location.search.slice(1);
//var keyword = window.location.pathname.split('/').pop();
var expressao = /-/gm;
var keyword2 = keyword.replace(expressao," ");
//var expressao = /%20/gm;
//var keyword2 = keyword.replace(expressao," ");
var palavras = keyword2.split(" ");

for (let i = 0; i < palavras.length; i++) {
  palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
}
var keyword = palavras.join(" ");

if (keyword.length === 0) {
     var keyword = "Ebook Para Criação de Brigadeiros";
} else {
    var keyword = palavras.join(" ");
}



function bntWhatsapp() {
  gtag('event', 'whatsapp');
    window.location.href = "https://wa.me/5511937373653?text=Ol%C3%A1%2C+gostaria+de+saber+sobre+Ebook+de+Criação+de+Brigadeiros.+Estava+Procurando+Por: +*" + keyword + "*";
  }

  function instagram() {
    gtag('event', 'instagram');
    window.location.href = "https://www.instagram.com/divinnobrigadeiro/";
  }

