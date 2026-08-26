 
import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({item }) => {
   

  return (
    
    <>
     
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {item.map((item) => (
           <FoodCard key={item.id} img={item} />
         ))}
        </div>
    </>
  
    
    
  );
};

export default OrderTab;