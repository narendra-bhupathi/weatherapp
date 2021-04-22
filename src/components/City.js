import React from 'react';

const City = ({city}) => {

    const sunrise=new Date(city.sunrise*1000);
    const sunset=new Date(city.sunset*1000);

  return (
    <div className="showTop">
        <h3>{city.name}</h3>
        <span>SunRise : {sunrise.getHours()}:{sunrise.getMinutes()}</span><br/>
        <span>SunSet : {sunset.getHours()}:{sunset.getMinutes()}</span>
    </div>
    
  );
};

export default City;