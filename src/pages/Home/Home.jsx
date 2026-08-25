import Banner from "./Banner";
import Category from "../Category/Category";
import Rectangle from "../../components/Rectangle/Rectangle";
import PopularMenu from "../../components/Rectangle/PopularMenu";
import CallUs from "../../components/Rectangle/CallUs";
import ChefRecommendations from "../../components/SectionTitle/ChefRecommendations";
import ChefRecommends from "../../components/Rectangle/ChefRecommends";
import FromOurMenu from "../../components/Rectangle/FromOurMenu";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div className="w-full m-0 p-0">
        <Helmet>
        <title>Home | Bistro Boss</title>

        <meta
          name="description"
          content="Welcome to Bistro Boss Restaurant."
        />
      </Helmet>
      <Banner />
      <Rectangle/>
        <PopularMenu />
            
      <Category />
      <CallUs />
      <ChefRecommendations/>
      <ChefRecommends/>
      <FromOurMenu/>

    </div>
  );
};

export default Home;