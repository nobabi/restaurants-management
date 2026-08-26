import bannerImage from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
 
import OrderTab from "./OrderTab";

const OrderFood = ({ title = "Order FOOD", subtitle = "WOULD YOU LIKE TO TRY A DISH?" }) => {
     const [tabIndex, setTabIndex] = useState(0);
    const { menuItems } = useMenu();
    const { category } = useParams();
    console.log(category)
    const dessert = menuItems.filter(item => item.category === "dessert");
    const soup = menuItems.filter(item => item.category === "soup");
    const salad = menuItems.filter(item => item.category === "salad");
    const pizza = menuItems.filter(item => item.category === "pizza");
    const drinks = menuItems.filter(item => item.category === "drinks");

  return (
    
    <>
      <section
    
      className="relative min-h-[460px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
       <Helmet>
            <title>Order Food | Bistro Boss</title>
    
            <meta
              name="description"
              content="Welcome to Bistro Boss Restaurant."
            />
          </Helmet>
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
   <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <OrderTab item={salad} />
      </TabPanel>
      <TabPanel>
        <OrderTab item={pizza} />
      </TabPanel>
      <TabPanel>
        <OrderTab item={soup} />
      </TabPanel>
       <TabPanel> 
        <OrderTab item={dessert} />
      </TabPanel>
      <TabPanel>
        <OrderTab item={drinks} />
      </TabPanel>
    </Tabs>

 
    </>
  
    
    
  );
};

export default OrderFood;