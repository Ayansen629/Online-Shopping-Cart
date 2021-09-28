import React, { Component } from 'react'

const productinfo=[
    {
      id:1,
      name:'T-shirt',
      cost:300,
      image:'1.jpg'
 
    },
    {
     id:2,
     name:'T-shirt',
     cost:500,
     image:'2.jpg'
 
 
    }
    
];


 class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    carditems:[],
    
    }

  }
  addCart=(name,link,price,id)=>{
      
    for(let i=0;i<this.state.carditems.length;i++)
    {
      console.log(id);

      if(this.state.carditems)
      {
        
        if(this.state.carditems[i].id===id)
        {
        
          return false;
        }
        
      }
      

    }
    let cart={};
    cart.name=name;
    cart.link=link;
    cart.price=price;
    cart.id=id;
    console.log("1",cart);
    this.state.carditems.push(cart);
    console.log("2",this.state.carditems);
    this.props.addToCartHandler(this.state.carditems);
      
    
  }
  

     render() {
       console.log("product value",this.props)
         const renderCard=(product,index)=>{
     
        return (
            <div className="cart-wrapper" key={index}>
            <div className="img-wrapper item">
               
            <img src={`/images/${product.image}`} alt="img"/>
                {/* <img src="https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg?tr=q-60"/> */}
            </div>
              <div className="text-wrapper item">
                {/* <span>I-Phone</span><br/>
                <span>Price:1000.00$</span> */}
                <span>{product.name}</span><br/>
                <span>{product.cost}</span>
              </div>
            <div className="btn-wrapper item">
            <button 
                   onClick={
                       ()=>{this.addCart(product.name,product.image,product.cost,product.id)}
                       }>
                       Add To Cart</button>
            <button className="remove-cart-btn" 
                   onClick={
                       ()=>{this.props.removeToCartHandler(product.id,product.name,product.cost,product.image)}
                       }>
                       Remove To Cart</button>
            </div>
 
            </div>
        
 


        )
                    }
        return(
            <div >
                      
                        <h1>Service Page</h1>
                        <div className="Products">
    
                        {productinfo.map(renderCard)}
                        </div>
    
               
            </div>
        )
   
         }
    

    
    
}

export default Product
