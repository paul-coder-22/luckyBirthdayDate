const dateError = document.querySelector('.date-error');
const numberError = document.querySelector('.number-error');
const happyGif = document.querySelector(".happyGif");
const sadGif = document.querySelector(".sadGif");
const privacyText = document.querySelector('.privacy-text');
const crossMark = document.querySelector('.crossMark');

// console.log(dateError.textContent)
// console.log(numberError.textContent)
// dateError.style.visibility = "hidden";
// numberError.style.visibility = "hidden"
hiddenText();
hiddenGif();
function getResult() {

    if (getValue() === 1) {
        happyGif.style.display = "inline"
        sadGif.style.display = "none"

        outputText("Hurray!!You are a lucky person!")
    } else if (getValue() === 0) {
        happyGif.style.display = "none"
        sadGif.style.display = "inline"
        outputText("Oops!!Your birthday is not a lucky number!")

    }
}

function getValue() {
    let date = document.getElementById('dateArr').value.split("-");
    let value = document.getElementById('luckyNum').value;

    // console.log(date)
    // console.log(value)

    if (date.length === 1 || value < 1) {

        if (date.length === 1) {
            dateError.style.visibility = "visible";
        } else {
            dateError.style.visibility = "hidden"
        }
        if (value < 1) {
            hiddenGif();
            document.getElementById('getDiv').innerHTML = ""
            numberError.style.visibility = "visible";

        } else {
            numberError.style.visibility = "hidden"
        }
        if (date.length === 1 && value < 1) {
            // dateError.style.visibility = "visible";
            // numberError.style.visibility = "visible";
            visibleText();
        }
    } else {
        hiddenText();
        return getSumOfvalues(date, value);
    }

}

function hiddenText() {
    dateError.style.visibility = "hidden";
    numberError.style.visibility = "hidden";
}
function visibleText() {
    dateError.style.visibility = "visible";
    numberError.style.visibility = "visible";
}

function hiddenGif() {
    happyGif.style.display = "none";
    sadGif.style.display = "none";
}

function getSumOfvalues(arr, num) {
    let sum = 0
    arr.map(ele => {
        for (let i = 0; i < ele.length; i++) {
            sum += Number(ele[i]);

        }
    })

    return (sum % num === 0 ? 1 : 0)
}

function outputText(textmsg) {
    document.getElementById('getDiv').innerHTML = textmsg;
}

crossMark.addEventListener('click', () => {
    privacyText.style.display = "none"
})