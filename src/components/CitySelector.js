import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        
          <div className="formDiv">
            <input
              placeholder="Search your city"
              onChange={(event) => setCity(event.target.value)}
              value={city} className="search"/>
            <Button className="searchbtn" onClick={() => onSearch(city)}>Search</Button>
            </div>
        
      </>
    );
  };

export default CitySelector;