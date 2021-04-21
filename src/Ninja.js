import React from 'react';





const Ninja = ({fullname,deleteninja}) => {


    
  //const {fullname} = props;
     const ninjalist = fullname.map(ninja => {
      if (ninja.id < 4) {
          return (
        
        <div className = "container-app"key={ninja.id}>
        <div> my firstname is {ninja.first}</div>
        <div> my middlename is {ninja.middle}</div>
        <div> my firstname is {ninja.last}</div>
        <button onClick={() =>{deleteninja(ninja.id)}}>delete</button>
        
        </div>
     )}
           else {
               return null
         
           
         }
        
      
    })
    return(
        <div className = "ninjalist">
        {ninjalist}
        </div>

    )



}


export default Ninja;