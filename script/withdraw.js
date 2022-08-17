const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function (event) {
	// console.log('deposit Button Clicked');
	const newWithdrawAmount = getInputFieldValueByID('withdraw-amount');
	const previousWithdrawTotal = getElementValueByID('withdraw-total');
	const previousTotalBalance = getElementValueByID('balance-total');

	if (newWithdrawAmount <= 0 || newWithdrawAmount > previousTotalBalance) {
		alert('Please Enter Valid Amount');
		setInputFieldValueByID('withdraw-amount', '');
		return;
	}

	const newWithdrawTotal = parseFloat(
		(previousWithdrawTotal + newWithdrawAmount).toFixed(2)
	);

	const newTotalBalance = parseFloat(
		(previousTotalBalance - newWithdrawAmount).toFixed(2)
	);

	setElementValueByID('withdraw-total', newWithdrawTotal);
	setElementValueByID('balance-total', newTotalBalance);
});
