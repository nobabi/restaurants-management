import Banner from "./Banner";
import Category from "../Category/Category";
import Rectangle from "../../components/Rectangle/Rectangle";
import PopularMenu from "../../components/Rectangle/PopularMenu";
import CallUs from "../../components/Rectangle/CallUs";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ChefRecommendations from "../../components/SectionTitle/ChefRecommendations";
const Home = () => {
  return (
    <div className="w-full m-0 p-0">
      <Banner />
      <Rectangle/>
        <PopularMenu />
        
      <Category />
       <CallUs />
 <ChefRecommendations/>

    </div>
  );
};

export default Home;