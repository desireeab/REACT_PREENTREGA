import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  let surname = "(here goes user's surname)";

  return <ItemList surname={surname} greeting={greeting} />;
};

export default ItemListContainer;
