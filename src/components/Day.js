import React from 'react';
import WeatherList from './WeatherList';
import City from './City'
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";


const Day = (props)=>{

    const location = useLocation();

    const [data, setData] = useState('');

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'

    setData(location.state);
        console.log(location.state); // result: 'some_value'
     }, [location]);
    return (

        <div>
    <City city={data.city}/>
    console.log("hai",data.city);
    <WeatherList weathers={data.list} />
    </div>

    );
};

export default Day;
