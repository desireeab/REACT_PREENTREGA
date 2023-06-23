const Home = ({ name, counter, setCounter }) => {
  return (
    <div style={{ padding: "0 5rem" }}>
      <h1>Hi {name}</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Sum</button>
    </div>
  );
};

export default Home;
