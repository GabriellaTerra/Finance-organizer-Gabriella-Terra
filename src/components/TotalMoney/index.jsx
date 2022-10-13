function TotalMoney({ listTransactions }) {
	const enterValue = listTransactions.filter(
		(transaction) => transaction.type === 'entrada'
	);
	const outValue = listTransactions.filter(
		(transaction) => transaction.type === 'saída'
	);

	function calculation() {
		const positive = enterValue.reduce((acc, currentValue) => {
			return acc + +currentValue.value;
		}, 0);

		const negative = outValue.reduce((acc, currentValue) => {
			return acc + +currentValue.value;
		}, 0);

		return positive - negative;
	}
	return (
		<div className="divTotalMoney">
			<h2 className="valorTotal">Valor Total : </h2>
			<div className="divtituloValorTotal">
				<h3 className="tituloValorTotal">
					{' '}
					R$
					{calculation()}
				</h3>
			</div>
		</div>
	);
}
export default TotalMoney;
