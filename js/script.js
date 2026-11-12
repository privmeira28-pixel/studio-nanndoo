(function(){
  // Contatos da bio do Instagram. Para trocar, mude só aqui.
  var WA_GERAL='https://wa.me/message/V36OQV22UGDEK1';   // link geral do studio (não aceita mensagem pronta)
  var WA={nando:'5511953203688',sandra:'5511996003476'};
  var INSTAGRAM='https://www.instagram.com/studio_nanndoo/';

  // data-wa vazio = link geral; data-wa="nando"/"sandra" = direto com o profissional, com mensagem pronta
  document.querySelectorAll('[data-wa]').forEach(function(a){
    var who=a.dataset.wa;
    if(WA[who]){
      var nome=who==='nando'?'Nando':'Sandra';
      var msg='Olá, '+nome+'! Vim pelo site do Studio Nanndoo. '+(a.dataset.msg||'Quero agendar um horário.');
      a.href='https://wa.me/'+WA[who]+'?text='+encodeURIComponent(msg);
    }else{
      a.href=WA_GERAL;
    }
  });
  document.querySelectorAll('[data-ig]').forEach(function(a){a.href=INSTAGRAM});
})();
