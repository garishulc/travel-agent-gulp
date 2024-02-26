
import autoComplete from "@tarekraafat/autocomplete.js";

import countryList from "../helpers/countryList.js";


function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: countryList,
      cache: true,
    },
    resultItem: {
      highlight: true,
    },
    //для работы ввода данных по выбору из всплывающего списка
    //добавить
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
        },
      },
    },
    //колличество результатов показываемое в всплывающем
    //списке
    resultsList: {
      maxResults: 15,
    },
    //поиск по четкому соответствию написанных нескольких букв
    //к примеру если US то найдет те слова, где они слитно
    searchEngine: 'strict',
  });
}

export default autoCompleteFunc;


