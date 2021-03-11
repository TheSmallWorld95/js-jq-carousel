// Creare uno slider di immagini: potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
$(document).ready(function () {
  carousel()
})
// Ho bisogno di 3 variabili per far compiere l'azione
function carousel() {
  // Per l'azione click prendo freccia sinistra e freccia destra
  var frecciaSx = $(".prev")
  var frecciaDx = $(".next")

  // Mi serve l'elemento che al click cambi la sua classe in modo che si veda
  // l'immagine che vogliamo noi

  // Ora scrivo la funzione che mi cambierà l'immagine al click della frecciaDx
  frecciaDx.click(function () {
    var immagine = $(".images img.active")

    if (immagine.hasClass("last")) {
      immagine.removeClass("active")
      immagine = $(".images img.first")
      immagine.addClass("active")
    }else {
      if (immagine.hasClass("active")) {
        immagine.removeClass("active")
        immagine.next().addClass("active")
      }
    }


  })
  // Ora scrivo la funzione che mi cambierà l'immagine al click della frecciaSx
  frecciaSx.click(function () {
    var immagine = $(".images img.active")
    if (immagine.hasClass("first")) {
      immagine.removeClass("active")
      immagine = $(".images img.last")
      immagine.addClass("active")
    }else {
      if (immagine.hasClass("active")) {
        immagine.removeClass("active")
        immagine.prev().addClass("active")
      }
    }

  })

}
