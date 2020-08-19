import React, {Component} from 'react';
import View from './View';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      activeView:'home'

    };

  }

  setActiveView = (view) => {
      this.setState({activeView:view})
  }
  
  render(){

    return(

      <div className="app">

        <View viewName="home" activeView={this.state.activeView} className="color1">
          <div className="header"><i onClick={() => this.setActiveView('cart')} className="fas fa-bars"></i></div>
          <div className="main">
            <p onClick={() => this.setActiveView('login')}></p>
            <h1>Home</h1>
            <h1 onClick={() => this.setActiveView('order')}>Shop</h1>
            <h3 onClick={() => this.setActiveView('contact1')}>Contact us</h3>
          </div>
        </View>

        <View viewName="cart" activeView={this.state.activeView} className="color2">
          <div className="header"><i onClick={() => this.setActiveView('home')} className="fas fa-times"></i></div>
          <div className="main">
            <p onClick={() => this.setActiveView('home')}>go to back to home</p>
            <h1 onClick={() => this.setActiveView('order')}>Shop</h1>
            Cart
        </div>
        </View>

      <View viewName="order" activeView={this.state.activeView}className="color3">
        <div className="header"><i onClick={() => this.setActiveView('home')}className="fas fa-times"></i></div>
        <div className="main">
          <p onClick={() => this.setActiveView('home')}>go to back to home</p>
          <h2> Order</h2>
          <p onClick={() => this.setActiveView('contact1')}>Find us</p>
        </div>
      </View>

      <View viewName="login" activeView={this.state.activeView}className="color4">
        <div className="header"><i onClick={() => this.setActiveView('home')}className="fas fa-times"></i></div>
        <div className="main">
          Login
        </div>
      </View>


      <View viewName="login2" activeView={this.state.activeView}className="color4">
        <div className="header"><i onClick={() => this.setActiveView('home')}className="fas fa-times"></i></div>
        <div className="main">
          Login 2
        </div>
      </View>

      <View viewName="contact1" activeView={this.state.activeView}className="color1">
        <div className="header"><i onClick={() => this.setActiveView('home')}className="fas fa-times"></i></div>
        <div className="main">
          <p onClick={() => this.setActiveView('home')}>go to back to home</p>
          <h3>Contact</h3>
          <p>Stacy Lee Ghin<br/>
          stacyleeghin@gmail.com<br/>
          mob 021977920</p>
        </div>
      </View>
  
    </div>
    



    )
  }


 
}

export default App;
