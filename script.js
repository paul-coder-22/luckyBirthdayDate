function getResult() {
    if (getValue()) {
        document.getElementById('getDiv').innerHTML = "Lucky"
    } else {
        document.getElementById('getDiv').innerHTML = "UnLucky"
    }
}

function getValue() {
    let date = document.getElementById('dateArr').value.split("-");
    let value = document.getElementById('luckyNum').value;
    let sum = 0
    date.map(ele => {
        for (let i = 0; i < ele.length; i++) {
            sum += ele[i];

        }
    })
    return (sum % value === 0 ? true : false);
}