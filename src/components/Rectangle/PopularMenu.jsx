import "./PopularMenu.css";

const menuItems = [
  {
    name: "ROAST DUCK BREAST",
    price: "$14.5",
  },
  {
    name: "TUNA NICOISE",
    price: "$14.5",
  },
  {
    name: "ESCALOPE DE VEAU",
    price: "$14.5",
  },
  {
    name: "CHICKEN AND WALNUT SALAD",
    price: "$14.5",
  },
  {
    name: "FISH PARMENTIER",
    price: "$14.5",
  },
  {
    name: "ROASTED PORK BELLY",
    price: "$14.5",
  },
];

const PopularMenu = () => {
  return (
    <section className="popular-menu">
      <div className="popular-menu-container">
        {menuItems.map((item, index) => (
          <div className="food-item" key={index}>
            <div className="food-img"></div>

            <div className="food-content">
              <div className="food-heading">
                <h3>{item.name}</h3>

                <div className="food-line"></div>

                <span>{item.price}</span>
              </div>

              <p>
                Roasted duck breast (served pink) with gratin potato and
                <br />
                a griotine cherry sauce
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="view-menu">
        VIEW FULL MENU
      </button>
    </section>
  );
};

export default PopularMenu;