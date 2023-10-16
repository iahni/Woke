import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Navbar from './NavBar'; 
 import Home from './Home';
  import Products from './Products';
   import AboutUs from './AboutUs';
    import ProductDetails from './ProductDetails'; 

    function App() 
{
      return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/"components={Home}/>
            <Route exact path="/product"components={Products}/>
            <Route path="/products/:id"components={ProductDetails}/>
            <Route path="/about"components={AboutUs}/>

          </Switch>

        </div>
      </Router>
  )
    };
    export default App; 