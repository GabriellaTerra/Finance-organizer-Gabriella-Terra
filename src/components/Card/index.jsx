import { FaTrash } from 'react-icons/fa';

function Card({ item, handleTodo }) {
	const { description, type, value } = item;
	console.log(item);

	return (
		<div className="divPai">
			<div className="divDescAndType">
				<h1 className="tituloDesc">{description}</h1>
				<p className="NameType">{type}</p>
			</div>
			<div className="divIrma">
				<h3 className="tituloValor">R${value}</h3>
				<button className="bntExcluir" onClick={() => handleTodo(item)}>
					<FaTrash />
				</button>
			</div>
		</div>
	);
}
export default Card;
