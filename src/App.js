import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import Header from './components/Header'
import City from './components/City';
import Search from './components/Search';
import View from './components/View';
import UseFetch from './hooks/UseFetch';
import {API_KEY, API_BASE_URL} from './api/config'
import WeatherList from './components/WeatherList';
import {Route, Switch,useHistory } from 'react-router-dom';


const App = () => {

  const history = useHistory();
  const {data, error, isLoading, setUrl} = UseFetch();

// error handling and loading
  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    console.log("appdata",data);
    history.push({pathname: `/search/${data.city.name}`,state: data});

  };

  return (
    <div className="App">
          <Switch>
                <Route path="/" exact />
                <Route path="/search/:place" component={Search} exact />
                <Route path="/view/" component={View} exact />
                <Route path="/view/:date" component={View} exact />
                <Route component={Error} />
            </Switch>
     <Header/>
      <CitySelector className="searchDiv" onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      {getContent()}
    </div>
  );
};

export default App;
