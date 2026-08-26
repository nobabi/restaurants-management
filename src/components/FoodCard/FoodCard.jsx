
const FoodCard = ({img}) => {
    const { name, recipe, price, image } = img;
    return (
        <>
      <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="text-lg font-bold absolute right-0 mr-4 mt-4  bg-slate-900 text-white">${price.toFixed(2)}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <p className="font-bold">${price.toFixed(2)}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
        
        </>
  
 
    );
};

export default FoodCard;