$(document).ready(function() {
    var doc = $(document.documentElement);
    // doc.addClass("js-ready");
    // $(document.documentElement).addClass("js-ready");
    $("#nav-open").click(function(){
        doc.addClass("js-nav-open");
        return false;
    });
    $("#nav-close").click(function(){
        doc.removeClass("js-nav-open");
        return false;
    });
});