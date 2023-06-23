const ItemList = ({ surname, greeting }) => {
  return (
    <div style={{ padding: "0 5rem" }}>
      <h1>{surname}</h1>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemList;
