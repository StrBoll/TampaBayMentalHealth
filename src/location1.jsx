import React from 'react';
import './Locations.css'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import MyApp from './bookingcomp';
const Loc1 = () => {


  return (
    <div>
        <div className='htext'>
            <h1 className='h'>Book an appointment!</h1>
        </div>
        <MyApp></MyApp>


    </div>
  );
};



  
export default Loc1;
