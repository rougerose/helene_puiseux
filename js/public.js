$(document).ready(function() {

    //
    // navigation principale
    //
    var doc = $(document.documentElement);
    $("#nav-open").click(function(){
        doc.addClass("js-nav-open");
        return false;
    });
    $("#nav-close").click(function(){
        doc.removeClass("js-nav-open");
        return false;
    });

    //
    // menu filtres
    //
    $(".articles-liste").each(function() {
      var $articles = $(this);
      var $nav = $articles.find("nav.js-filtres-nav"),
          $btn = $articles.find("#btnFiltres");

      // fermer au chargement de la page
      closeNav($nav);

      // Bouton d'ouverture des filtres
      $btn.click(function() {
        toggleBtn($(this));
        toggleNav($nav);
      });

      // Après rechargement du bloc en ajax,
      // recupérer les éléments boutons et navigation de filtres
      $(document).ajaxComplete(function(event) {
        // console.log(event);
        var $btn = $("#btnFiltres");
        var $nav = $("nav.js-filtres-nav");

        // la navigation des filtres est ouverte par défaut.
        closeNav($nav);

        // Actions sur le bouton
        $btn.click(function() {
          toggleBtn($(this));
          toggleNav($nav);
        });
      });
    });

    function toggleBtn(el) {
      el.toggleClass("is-active");
    }

    // function openNav(el) {
    //   el.slideDown();
    //   el.addClass("is-open");
    // }

    function closeNav(el) {
      el.slideUp();
      el.removeClass("is-open");
    }

    function toggleNav(el) {
      el.slideToggle(300);
      el.toggleClass("is-open");
    }
});
