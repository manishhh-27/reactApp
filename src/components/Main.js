import { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


import { DISHES } from '../shared/dishes'
import Menu from './Menu';
import DishDetails from './dishDetails';
class Main extends Component {
  constructor(props){
          super(props);
          this.state = {
            dishes: DISHES,
            selectedDish:null
    
          };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish : dish});
}
  render(){
  return (
    <div >
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>confusion navbar</NavbarBrand>
        </div>
      </Navbar>

      <Menu dishes={this.state.dishes}
      onClick={(dishId)=>this.onDishSelect(dishId)}
        />

      <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    <DishDetails selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                    
                  </div>
                </div>
    </div>
  );}
}



export default Main;
