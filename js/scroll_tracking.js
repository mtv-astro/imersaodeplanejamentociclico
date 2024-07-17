// Função para rastrear a profundidade de rolagem
function trackScrollDepth() {
    var scrollDepth = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    var scrollPercentage = (scrollDepth / documentHeight) * 100;
  
    if (scrollPercentage >= 25 && !window.scrollTracked25) {
      fbq('trackCustom', 'ScrollDepth25', {depth: '25%'});
      window.scrollTracked25 = true;
    } 
    if (scrollPercentage >= 50 && !window.scrollTracked50) {
      fbq('trackCustom', 'ScrollDepth50', {depth: '50%'});
      window.scrollTracked50 = true;
    } 
    if (scrollPercentage >= 75 && !window.scrollTracked75) {
      fbq('trackCustom', 'ScrollDepth75', {depth: '75%'});
      window.scrollTracked75 = true;
    } 
    if (scrollPercentage >= 100 && !window.scrollTracked100) {
      fbq('trackCustom', 'ScrollDepth100', {depth: '100%'});
      window.scrollTracked100 = true;
    }
  }
  
  // Adiciona o evento de rolagem para monitorar a profundidade
  window.addEventListener('scroll', trackScrollDepth);
  