"use strict"

async function convertCase() {
    let inputField = document.getElementById("chosenWord");
    let resultField = document.getElementById("caseResult");
    let option = document.getElementById("chosenCase").options.selectedIndex;
    let form = document.getElementById("caseContainer");

    let newUrl = encodeURIComponent(`${inputField.value}`);
    let caseOption;

    switch (option) {
        case 0:
            caseOption = "ИМ";
            break;
        case 1:
            caseOption = "РД";
            break;
        case 2:
            caseOption = "ДТ";
            break;
        case 3:
            caseOption = "ВН";
            break;
        case 4:
            caseOption = "ТВ";
            break;
        case 5:
            caseOption = "ПР";
            break;
    }

    let response = await fetch(`http://htmlweb.ru/json/service/inflect?inflect=${newUrl}&partofspeech=С&grammems=ЕД,${caseOption}&letter_case=ucfirst`);
    let result = await response.json();

    resultField.innerHTML = result.items[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        convertCase();
    })
}

window.addEventListener("load", convertCase);