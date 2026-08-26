import { useEffect, useState } from "react";

const ChefRecommends = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/menu')  // Fetch data from the backend server
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load menu");
        }

        return res.json();
      })
      .then((data) => {
        const popularItems = data
          .filter((item) => item.category === "popular")
          .slice(0, 3);

        setItems(popularItems);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center py-10">
        <span className="loading loading-spinner loading-md"></span>
      </section>
    );
  }

  return (
    <section className="w-full py-10">
      
      {/* =========================
          SECTION TITLE
      ========================== */}
      <div className="mx-auto mb-6 w-full max-w-2xl px-4 text-center">

        {/* Small title */}
        <p className="mb-1 text-[10px] italic text-[#e5a000]">
          -- Should Try --
        </p>

        {/* Main title */}
        <div className="flex items-center justify-center gap-3">
          
          <div className="h-px flex-1 bg-gray-200"></div>

          <h2 className="whitespace-nowrap text-[18px] font-normal tracking-wide text-gray-800">
            CHEF RECOMMENDS
          </h2>

          <div className="h-px flex-1 bg-gray-200"></div>

        </div>
      </div>


      {/* =========================
          FOOD CARDS
      ========================== */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 md:grid-cols-3">

        {items.map((item, index) => (

          <div
            key={item._id}
            className="card overflow-hidden rounded-none bg-[#f5f5f5] shadow-none"
          >

            {/* Food Image */}
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="h-[120px] w-full object-cover"
              />
            </figure>


            {/* Card Body */}
            <div className="card-body items-center px-4 py-3 text-center">

              {/* Food Name */}
              <h3 className="text-[11px] font-medium uppercase text-gray-800">
                {item.name}
              </h3>


              {/* Recipe */}
              <p className="max-w-[180px] text-[8px] leading-[12px] text-gray-600">
                {item.recipe}
              </p>


              {/* Add To Cart */}
              <button
                className={`btn btn-xs mt-2 h-8 min-h-0 rounded-sm px-4 text-[8px] font-normal ${
                  index === 1
                    ? "border-[#202936] bg-[#202936] text-[#e5a000] hover:bg-[#202936]"
                    : "border-[#e5a000] bg-transparent text-[#c98d00] hover:border-[#202936] hover:bg-[#202936] hover:text-[#e5a000]"
                }`}
              >
                ADD TO CART
              </button>

            </div>
          </div>

        ))}

      </div>
    </section>
  );
};

export default ChefRecommends;