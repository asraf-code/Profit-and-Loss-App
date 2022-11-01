const initialPrice = document.querySelector("#input-price");
const currentPrice = document.querySelector("#current-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const submitBtn = document.querySelector("#submit-btn");

const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', calculateProfitAndLoss);

function calculateProfitAndLoss() {
    const ip = initialPrice.value;
    const qty = stocksQuantity.value;
    const curr = currentPrice.value;
    if(ip&&qty&&curr) {
        if(ip > curr) {
            calculateLossValues(ip, curr, qty);
            outputBox.style.color = 'red';
        } else if (curr > ip){
            calculateProfitValues(ip, curr, qty);
            outputBox.style.color = 'green';
        } else {
            showOutput("No pain no gain and no gain no pain");
            outputBox.style.color = 'grey';
        }
    } else {
        showOutput("Please enter values to calculate!")
    }
}

function calculateLossValues(initial, current, quantity) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss/initial) * 100;

    
    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`);

}

function calculateProfitValues(initial, current, quantity) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit/initial) * 100;

    showOutput(`Hey the loss is ${profit} and the percent is ${profitPercentage.toFixed(2)}%`);

}

function showOutput (message) {
    outputBox.innerHTML = message;
    
}