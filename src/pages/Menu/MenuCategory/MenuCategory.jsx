 
 
 import { Link } from "react-router";
import Cover from "../../../components/shared/Cover/Cover";
 
 

const MenuCategory = ({itmes,title,image}) => {
    return (
<>
<div className="pt-8">
        {title && <Cover img={image} title={title}></Cover>}
         <div className="popular-menu-container mt-10">
        {itmes.map((item) => (
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
      
        </div>
       <Link to={`/OrderFood/${title}`} className="flex justify-center mt-8">
         <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">ORDER NOW</button>
       </Link>
</>
        
        
    );
};

export default MenuCategory;