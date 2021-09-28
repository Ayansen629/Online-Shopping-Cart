// import logo from './logo.svg';
import './App.css';
// import Users from './components/Users';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ProductContainer from './containers/ProductContainer';
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer';
import CartContainer from './containers/CartContainer';
import PaymentContainer from './containers/PaymentContainer';
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



function App() {
  return (
    <div className="App">
     
     {/* <Users data={{name:'ayan sen'}}/> */}
     <HeaderContainer/>
     {/* <ProductContainer/> 
     <HomeContainer/> */}
     <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route  exact path="/service" component={ProductContainer}/>
       <Route exact path="/cart" component={CartContainer}/>
      <Route exact path="/payment" component={PaymentContainer}/>
      <Redirect to="/"/>

      </Switch>
    </div>
  );
}

export default App;
