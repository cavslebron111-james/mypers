import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Ninja  from './Ninja';
import Addninja from './Addninja';
class App extends Component {
 state = { fullname: [
    {first:'RUEL',
     middle: 'ROXAS',
     last:'AGNES',
     id:'1'},
     {first:'DENNIS',
     middle: 'CAJUCOM',
     last:'AQUINO',
     id:'2'},
     {first:'RONALD',
     middle: 'DELARA',
     last:'CABATUANDO',
     id:'3'}
    
    
    
  ]
 }
 addninja = (ninja) => {
  ninja.id = Math.random();
  let fullname = [...this.state.fullname,ninja];
  this.setState({
    fullname:fullname
  })

 }
 deleteninja=(id) =>{ 

  let fullname = this.state.fullname.filter(ninja =>{
    return ninja.id !== id
  })
 this.setState({
   fullname:fullname
 })
}


  render() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ninja fullname ={this.state.fullname} deleteninja={this.deleteninja}  />
        <Addninja addninja ={this.addninja} />
        
        </header>
    </div>
  );
  }
}

export default App;
