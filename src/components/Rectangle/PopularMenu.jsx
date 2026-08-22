import { useEffect, useState } from "react";
import "./PopularMenu.css";

const PopularMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load menu.json");
        }

        return response.json();
      })
      .then((data) => {
        const popularItems = data.filter(
          (item) => item.category === "popular"
        );

        setMenuItems(popularItems);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setError("Failed to load popular menu.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading popular menu...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="popular-menu">
      <div className="popular-menu-container">
        {menuItems.map((item) => (
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