const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  const style = {backgroundColor: 'red'};
  return (
    <header style={style} className="header">
      <h1>Mini Project Pizza</h1>
    </header>
  );
};

const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  // const pizzaData = [];

  const totalPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu Pizza</h2>

      {totalPizza > 0 ? (
        <>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <ul className="pizzas">
            {pizzaData.map((item) => (
              <Content dataObj={item} key={item.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kami sedang memproses Menu. Kembali lagi nanti :)</p>
      )}

      
    </main>
  );

};

const Content = ({ dataObj }) => {
  // console.log(props);
  console.log(dataObj);

  // if(props.dataObj.soldOut) return <p>Sold Out</p>;

  return (
    <li className={`pizza ${dataObj.soldOut ? "sold-out" : ""}`}>
      <img src={dataObj.photoName} alt={dataObj.name} />
      <div>
        <h3>{dataObj.name}</h3>
        <p>{dataObj.ingredients}</p>
        <span>{dataObj.soldOut ? 'Habis banh' : dataObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const buka = 12;
  const tutup = 23;

  const statusToko = hour >= buka && hour <= tutup;
  console.log(hour);
  console.log(statusToko);

  return (
    <footer className="footer">
      {statusToko ? (
        <div className="order">
          <p>Kami siap melayani anda sampai pukul {tutup}:00</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Kami Akan Buka antara {buka}:00 dan {tutup}:00
        </p>
      )}
    </footer>
  );
};

export default App;
