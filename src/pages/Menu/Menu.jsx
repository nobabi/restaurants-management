import Cover from "../../components/shared/Cover/Cover";
import "./Menu.css";
import { Helmet } from "react-helmet-async";
import meunImage from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg' 
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'

 
 
const Menu = () => {
   
  const { menuItems, loading, error } = useMenu();

  if (loading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const dessert = menuItems.filter(item => item.category === "dessert");
  const soup = menuItems.filter(item => item.category === "soup");
  const salad = menuItems.filter(item => item.category === "salad");
  const pizza = menuItems.filter(item => item.category === "pizza");
  const offered = menuItems.filter(item => item.category === "offered");

  return (
    <>
      <Helmet>
        <title>Our Menu | Bistro Boss</title>

        <meta
          name="description"
          content="Explore the delicious menu at Bistro Boss Restaurant."
        />
      </Helmet>
      <Cover img={meunImage} title="Our Menu"></Cover>
    
      <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
       <MenuCategory itmes={offered}  ></MenuCategory>

       <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
       <MenuCategory itmes={dessert} title="Desserts" image={dessertImage}></MenuCategory>
    
     <MenuCategory itmes={pizza} title="Pizzas" image={pizzaImage}></MenuCategory>
      <MenuCategory itmes={salad} title="Salads" image={saladImage}></MenuCategory>
       <MenuCategory itmes={soup} title="Soups" image={soupImage}></MenuCategory>
    </>
  );
};

export default Menu;