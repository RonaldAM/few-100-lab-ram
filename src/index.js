import './styles.css';
import { ready } from './utils';
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPerentage');
const tipAmount = document.getElementById('tipAmount');
const amountDue = document.getElementById('amountDue');

billAmount.addEventListener("focusout", function () {
    if (isNaN(this.value)) {
        this.classList.add("is-invalid");
        clearAmounts();
    }
    else {
        this.classList.remove("is-invalid");
        calculateAmounts();
    }
});

[...document.querySelectorAll('.btnTipClass')]
    .forEach(function (item) {
        item.addEventListener('click', function () {
            enableAllTipButtons();
            this.setAttribute("disabled", "disabled");
            tipPercentage.innerHTML = this.innerHTML.substring(0, 3);
            lblText.innerHTML = "You are tipping ... " + this.innerHTML;
            if (isNaN(billAmount.value))
                clearAmounts();
            else
                calculateAmounts();
        })
    });

function clearAmounts() {
    tipAmount.innerHTML = "";
    amountDue.innerHTML = "";
}

function calculateAmounts() {
    let tip = parseFloat(tipPerentage.innerHTML) / 100;
    tipAmount.innerHTML = (billAmount.value * tip).toFixed(2);
    amountDue.innerHTML = (Number(tipAmount.innerHTML) + Number(billAmount.value)).toFixed(2);
}

function enableAllTipButtons() {
    [...document.querySelectorAll('.btnTipClass')]
        .forEach(function (item) {
            item.disabled = false;
        });
};

console.log('Ready to Party');
ready(() => { });