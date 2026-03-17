import $ from "jQuery";
import filtrerArticles from "./modules/filtrerArticles";

/**
 * Recharchement en ajax des articles en fonction des critères
 * de filtres choisis par l'utilisateur.
 */
$(function () {
  // document is ready
  $(".formulaire_filtrer_articles").on(
    "click",
    "input[type='checkbox']",
    filtrerArticles,
  );
});
