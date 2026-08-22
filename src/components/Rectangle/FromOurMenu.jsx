import SectionTitle from "../SectionTitle/SectionTitle";
import featuredig from '../../assets/home/featured.jpg';
 



import React from 'react';

const FromOurMenu = () => {
  return (
    <div>
      <SectionTitle subHeading={"Checck it out"} heading={"Featured Item"}></SectionTitle>
      <div>
        <div>
          <img src="{featuredig}" alt="" />
        </div>
        <div>
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
