import React,{Component} from 'react';

class Addninja extends Component {
state = {
    first: null,
    middle: null,
    last: null
}
 handlechange = (e) => {
 this.setState({
     [e.target.id]: e.target.value
 })
 }

 submitform = (e) => {
     e.preventDefault();
   this.props.addninja(this.state)  
 }


render(){
        return(
<div className="cont-1">
<form onSubmit ={this.submitform}>
<label >firstname</label>
<input type ='text' id='first' onChange={this.handlechange} />
<label >middlename</label>
<input type ='text' id='middle' onChange={this.handlechange} />
<label >lastname</label>
<input type ='text' id='last' onChange={this.handlechange} />
<button>submit</button>
</form>

</div>


        )
    }
}



export default Addninja;