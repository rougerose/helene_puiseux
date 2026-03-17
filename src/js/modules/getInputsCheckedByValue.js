import $ from "jQuery";

/**
 * Extraire les valeurs (id) des checkbox sélectionnés
 * @param {object} $inputs Liste des checkbox
 * @returns {array} Tableaux des valeurs
 */
function getInputsCheckedByValue($inputs) {
  const checkedInputs = [];

  if ($inputs.length > 0) {
    $inputs.each(function () {
      if ($(this).is(":checked")) {
        checkedInputs.push($(this).val());
      }
    });
  }
  return checkedInputs;
}

export default getInputsCheckedByValue;
