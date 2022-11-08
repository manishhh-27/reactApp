
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menu';
import './App.css';
import { DISHES } from './shared/dishes'
import { Component } from 'react';
import Main from './components/Main'
class App extends Component {
  
  render(){
  return (
    <div >
     
      <Main />
    </div>
  );}
}



export default App;
