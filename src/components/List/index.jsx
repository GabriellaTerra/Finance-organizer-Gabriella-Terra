import Card from "../Card";

function List({ listTransactions, handleTodo, item }) {
  return (
    <ul className="listaRender">
      {listTransactions.map((item, index) => (
        <Card key={index} item={item} handleTodo={handleTodo} />
      ))}
    </ul>
  );
}

export default List;
