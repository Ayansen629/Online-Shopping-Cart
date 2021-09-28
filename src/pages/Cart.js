import React, { Component } from 'react'
import CardDatacom from "../components/CardDataCom";
 class Cart extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             cardvalue:this.props.data
              
         }
         
        }
        // componentDidMount=()=>{
        //     console.log("cart data",this.state.cardvalue);

        // }
     
    render() {
        console.log("data",this.state.cardvalue);
        return (
            <div>
            <h1>
                Cart Page
            </h1>
               
                  {this.state.cardvalue.map((item,index)=>{ 
                      console.log("item data",item);
                  return(

                  <div key={index}>
                      <CardDatacom data={item.cardData}/>
                  </div>
                  )
                   
                })}
                   

               

                
            </div>
        )
    }
}

export default Cart
