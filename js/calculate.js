
const calculateTotalParsentage = parsent => {
    const totalAmountId = document.getElementById('bill-amount');
    const amountString = totalAmountId.value;
    const amount = parseFloat(amountString)
    const tipPercentages = parsent;
    const tipPercentageamount = (amount / 100) * tipPercentages;
    console.log(tipPercentageamount)
    return tipPercentageamount !== NaN ? tipPercentageamount : alert('please type valied amount')
}
// Calculate the Tip Amount Function
function calTip(amount) {
    const peopleId = document.getElementById('people');
    const peopleValueText = peopleId.value;
    const peopleValue = parseFloat(peopleValueText);
    const tipPercentageamount = amount;
    const tipPP = tipPercentageamount / peopleValue;
    console.log(+tipPP.toFixed(2))
    return +tipPP.toFixed(2);
}
function returnIdToValue(id) {
    const docId = document.getElementById(id)
    return docId;
}
// place amounts
function placeAmounts(totalParsentage, tipPP) {
    const tipAmountTotalId = returnIdToValue('tiplAmount');
    tipAmountTotalId.innerText = totalParsentage.toFixed(2);
    //
    const totalAmountId = document.getElementById('bill-amount');
    const amountString = totalAmountId.value;
    const amount = parseFloat(amountString)
    const AmountTotalId = returnIdToValue('totalAmount');
    AmountTotalId.innerText = (totalParsentage + amount).toFixed(2);
    //
    const totalAmountIdpp = document.getElementById('people');
    const amountStringpp = totalAmountIdpp.value;
    const amountpp = parseFloat(amountStringpp)
    //
    const AmountppId = returnIdToValue('totalAmountPP');
    AmountppId.innerText = (amount / amountpp).toFixed(2);
    console.log(amountpp)
    //
    const tipPPId = returnIdToValue('tipAmountPP');
    tipPPId.innerText = tipPP;
}
// clear and olaceHolder function
const clearAndPlaceHolder = () => {
    const amountField = document.getElementById('bill-amount');
    const amountofPeopleField = document.getElementById('people');
    const amount = amountField.value;
    const people = amountofPeopleField.value;
    amountofPeopleField.value = '';
    amountField.value = '';
    amountField.setAttribute('placeholder', amount);
    amountofPeopleField.setAttribute('placeholder', people);
}
document.getElementById('btn-five').addEventListener('click', function () {
    const totalParsentage = calculateTotalParsentage(5)//
    //

    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        //
        placeAmounts(totalParsentage, tipPP)
        //
        document.getElementById('custom-amount').classList.add('d-none')
        clearAndPlaceHolder()
    })
})
document.getElementById('btn-ten').addEventListener('click', function () {
    const totalParsentage = calculateTotalParsentage(10)
    //
    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        placeAmounts(totalParsentage, tipPP)
        //

        document.getElementById('custom-amount').classList.add('d-none');
        clearAndPlaceHolder()
    })
})
document.getElementById('btn-fifteen').addEventListener('click', function () {
    const totalParsentage = calculateTotalParsentage(15)
    //
    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        placeAmounts(totalParsentage, tipPP);
        //
        document.getElementById('custom-amount').classList.add('d-none');
        clearAndPlaceHolder();
    })
})
document.getElementById('btn-tweentyfive').addEventListener('click', function () {
    const totalParsentage = calculateTotalParsentage(25)
    //
    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        placeAmounts(totalParsentage, tipPP)
        //
        document.getElementById('custom-amount').classList.add('d-none');
        clearAndPlaceHolder();
    })
})
document.getElementById('btn-fifty').addEventListener('click', function () {
    const totalParsentage = calculateTotalParsentage(50)
    //
    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        placeAmounts(totalParsentage, tipPP)
        //
        document.getElementById('custom-amount').classList.add('d-none');
        clearAndPlaceHolder();
    })
})
document.getElementById('btn-custom-amount').addEventListener('click', function () {
    const customAmountId = document.getElementById('custom-amount');
    customAmountId.classList.toggle('d-none')
    customAmountId.style.transition = 'all 0.3s ease-in-out'
    //

})
const parsentageField = document.getElementById('custom-parsentage');
parsentageField.addEventListener('keyup', function () {
    const customPasentageString = parsentageField.value;
    const customPasentage = parseFloat(customPasentageString);
    const totalParsentage = calculateTotalParsentage(customPasentage)

    document.getElementById('calcPeople').addEventListener('click', function () {
        const tipPP = calTip(totalParsentage);
        placeAmounts(totalParsentage, tipPP);
        //
        document.getElementById('custom-amount').classList.add('d-none');
        clearAndPlaceHolder();
    })
})

//
document.querySelector('.reset').addEventListener('click', () => {
    location.reload()
})

