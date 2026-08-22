import Cover from "../../components/shared/Cover/Cover";
import "./Menu.css";
import { Helmet } from "react-helmet-async";
import meunImage from '../../assets/menu/banner3.jpg'
import PopularMenu from "../../components/Rectangle/PopularMenu";
 
 
const Menu = () => {
   

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
      <PopularMenu></PopularMenu>
      <Cover img={meunImage} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={meunImage} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </>
  );
};

export default Menu;