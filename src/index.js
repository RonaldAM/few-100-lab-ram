import './styles.css';
import { ready } from './utils';
const billAmount = document.getElementById('billAmount');
const text = document.getElementById('lblText');
const tipPercentage = document.getElementById('tipPerentage');
const tipAmount = document.getElementById('tipAmount');
const amountDue = document.getElementById('amountDue');

if (billAmount) {
    billAmount.addEventListener("focusout", function () {
        console.log('focus lost');
        this.classList.add("is-invalid");
    });
}

[...document.querySelectorAll('.btnTipClass')]
    .forEach(function (item) {
        item.addEventListener('click', function () {
            enableAllTipButtons();
            this.setAttribute("disabled", "disabled");
            tipPercentage.innerHTML = this.innerHTML.substring(0, 3);
            lblText.innerHTML = "You are tipping ... " + this.innerHTML;

            let tip = parseFloat(tipPerentage.innerHTML) / 100;
            tipAmount.innerHTML = (billAmount.value * tip).toFixed(2);
            amountDue.innerHTML = (Number(tipAmount.innerHTML) + Number(billAmount.value)).toFixed(2);
            console.log(amountDue);
        })
    });
function setErrorCondition() {

}

function enableAllTipButtons() {
    [...document.querySelectorAll('.btnTipClass')]
        .forEach(function (item) {
            item.disabled = false;
        });
};

console.log('Ready to Party');
ready(() => { });