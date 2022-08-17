const depositBtn = document.getElementById('btn-deposit');
depositBtn.addEventListener('click', function (event) {
	// console.log('deposit Button Clicked');
	const newDepositAmount = getInputFieldValueByID('deposit-amount');
	const previousDepositTotal = getElementValueByID('deposit-total');
	const previousTotalBalance = getElementValueByID('balance-total');

	if (newDepositAmount <= 0) {
		alert('Please Enter Valid Amount');
		setInputFieldValueByID('deposit-amount', '');
		return;
	}

	const newDepositTotal = parseFloat(
		(previousDepositTotal + newDepositAmount).toFixed(2)
	);

	const newTotalBalance = parseFloat(
		(previousTotalBalance + newDepositAmount).toFixed(2)
	);

	setElementValueByID('deposit-total', newDepositTotal);
	setElementValueByID('balance-total', newTotalBalance);
});
