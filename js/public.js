$(document).ready(function() {
    // navigation principale
    var doc = $(document.documentElement);
    $("#nav-open").click(function(){
        doc.addClass("js-nav-open");
        return false;
    });
    $("#nav-close").click(function(){
        doc.removeClass("js-nav-open");
        return false;
    });
    // menu filtres
    $("#filtres").each(function(){
        var $menu = $(this),
            $toggle = $menu.find($("#filtres-toggle")),
            $nav = $menu.find($("nav"));
        $nav.hide();
        $toggle.click(function(){
            $(this).toggleClass("is-active");
            $nav.slideToggle().toggleClass("is-open");
            return false;
        });
    });
});