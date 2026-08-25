import bannerImage from "../../assets/shop/banner2.jpg";

const OrderFood = ({ title = "OUR SHOP", subtitle = "WOULD YOU LIKE TO TRY A DISH?" }) => {
  return (
    <section
      className="relative min-h-[460px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[460px] items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-black/45 px-6 py-16 text-center md:px-12">
          <h1 className="font-serif text-5xl font-bold uppercase tracking-wide text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-4 font-serif text-sm uppercase tracking-wider text-white md:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderFood;