import React, { Component } from 'react'

class CardDatacom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:this.props.data
        }
    }
    
    render() {
        const data=this.state.data;
        return (
            <>
            {
                data.map((item,index)=>{
                    
                    return(

            <div key={index} className="item_all" >
            <div className="item_name">

            {item.name}
            </div>
            <div className="item_image">
            <img src={`/images/${item.link}`} alt="img"/>
            

            {/* {item.link} */}
            </div>
            <div className="item_price">

            {item.price}
            </div>

            </div>
                    )
            })
        }
        </>
        )
    }
}

export default CardDatacom
