import React, {Component} from 'react';
import './View.js';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      activeView:'home'

    };

  }

  setActiveView = (view) => {
      this.setState({activeView:View})
  }
  
  render(){

    return(

      <div className="app">

          <View viewName="Home" activeView={this.state.activeView}className="color1">
              <div className="header"><i onClick={() => this.setActiveView('Home')} className="fas fa-bars"></i></div>
              <div className="main">
                Home
              </div>
          </View>

      <View viewName="Cart" activeView={this.state.activeView}className="color2">
        <div className="header"><i onClick={() => this.setActiveView('Home')}className="fas fa-times"></i></div>
        <div className="main">
          Cart
        </div>
      </View>

      <view viewName="Order" activeView={this.state.activeView}className="color3">
        <div className="header"><i onClick={() => this.setActiveView('Home')}className="fas fa-times"></i></div>
        <div className="main">
          Order
        </div>
      </view>

      <View viewName="Login" activeView={this.state.activeView}className="color4">
        <div className="header"><i onClick={() => this.setActiveView('Home')}className="fas fa-times"></i></div>
        <div className="main">
          Login
        </div>
      </View>

      <View viewName="Contact" activeView={this.state.activeView}className="color5">
        <div className="header"><i onClick={() => this.setActiveView('Home')}className="fas fa-times"></i></div>
        <div className="main">
          Contact
        </div>
      </View>
  
    </div>
    



    )
  }


 
}

export default App;
