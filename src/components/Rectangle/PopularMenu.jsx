import "./PopularMenu.css";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {

  const { menuItems, loading, error } = useMenu();

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const popular = menuItems.filter(
    item => item.category === "popular"
  );

  return (
    <section className="popular-menu">
      <div className="popular-menu-container">
        {popular.map((item) => (
          <div className="food-item" key={item._id}>
            <div className="food-img">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="food-content">
              <div className="food-heading">
                <h3>{item.name.toUpperCase()}</h3>

                <div className="food-line"></div>

                <span>${item.price}</span>
              </div>

              <p>{item.recipe}</p>
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