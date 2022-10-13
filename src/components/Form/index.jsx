import { useState } from 'react';
import TotalMoney from '../TotalMoney';
import List from '../List';

function Form({ listTransactions, setlistTransactions, handleTodo }) {
	const [inputDesc, setInputDesc] = useState([]);

	const [inputValue, setInputValue] = useState(true);

	const [inputType, setInputType] = useState('entrada');

	const newTransation = {
		id: 1,
		description: inputDesc,
		value: inputValue,
		type: inputType,
	};

	return (
		<div className="divFather">
			<main className="mainForm">
				<form>
					<label className="label">
						Descrição
						<input
							onChange={(event) => setInputDesc(event.target.value)}
							className="inputDescricao"
							type="text"
							placeholder="Digite aqui sua descrição"
						/>
					</label>
					<div className="divItensJuntos">
						<label className="label">
							Valor
							<input
								onChange={(event) => setInputValue(event.target.value)}
								className="inputValor"
								type="number"
								placeholder="R$"
							/>
						</label>
						<label className="label">
							{' '}
							Tipo de valor
							<select
								onChange={(event) => setInputType(event.target.value)}
								className="selecionarTipo"
							>
								<option className="optionCursor" value="entrada">
									Entrada
								</option>
								<option className="optionCursor" value="saída">
									Saída
								</option>
							</select>
						</label>
					</div>
					<button
						type="submit"
						className="bntMoneyValue"
						onClick={(event) => {
							event.preventDefault();
							if (inputDesc.length !== 0) {
								setlistTransactions([...listTransactions, newTransation]);
							}
						}}
					>
						Inserir Valor
					</button>
				</form>
				<div className="divCardTotalMoney">
					<TotalMoney listTransactions={listTransactions} />
				</div>
			</main>
			<div className="divLista">
				<List handleTodo={handleTodo} listTransactions={listTransactions} />
			</div>
		</div>
	);
}
export default Form;
