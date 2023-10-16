import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import Home from './Home';
  import NavBar from './NavBar'; 
  import Products from './Products';
   import AboutUs from './AboutUs';
    import ProductDetails from './ProductDetails'; 

    function App() 
{
      return (
      <Router>
        <div className= "App">
          <NavBar/>
          <Switch>
            <Route exact path="/"component={Home}/>
            <Route exact path="/product"component={Products}/>
            <Route path="/products/:id"component={ProductDetails}/>
            <Route path="/aboutus"component={AboutUs}/>

          </Switch>

        </div>
      </Router>
  )
    };
    export default App; 