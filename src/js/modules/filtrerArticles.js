import $ from "jQuery";
import getInputsCheckedByValue from "./getInputsCheckedByValue";

/**
 * Filtrer les articles selon les checkbox sélectionnés par l'utilisateur
 * @use ajaxReload() fonction globale Spip de rechargement en ajax du bloc identifié dans le premier paramètre.
 */
function filtrerArticles() {
  let $inputs = $(this).parents("form").find("input[type='checkbox']"),
    checkedInputs = getInputsCheckedByValue($inputs),
    ajaxParameters = { mots: [] };

  for (const id of checkedInputs) {
    ajaxParameters.mots.push(id);
  }

  ajaxReload("articles", {
    history: true,
    args: ajaxParameters,
  });
}

export default filtrerArticles;
