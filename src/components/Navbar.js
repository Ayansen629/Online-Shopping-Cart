import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar(props) {
  console.warn("Header", props.data);
  return (
    <>
      {/* <div className="container-fluid nav bg">
      <div className="row">
      <div className="col-10 mx-auto"> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Ecommerce Website
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink
                exact
                activeclassName="menu_active"
                className="nav-link"
                to="/"
              >
                Home{" "}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="menu_active"
                to="/service"
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="menu_active"
                to="/cart"
              >
                Card
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="menu_active"
                to="/payment"
              >
                Payment Gateway
              </NavLink>
            </li>
            <li className="add-to-cart">
              <span className="cart-count">{props.data.length}</span>
              <Link to={"/cart"}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div>

      </div>


      </div> */}
    </>
    //         <div>
    //              {/* <div className="add-to-cart">
    //     <span className="cart-count">{props.data.length}</span>
    //                 <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
    //             </div>
    //      */}
    //      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="#">Mobile Shop</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>

    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav ml-auto">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li>
    //       <li class="nav-item"  >
    //         <a class="nav-link" href="#">Service</a>
    //       </li>
    //       <li class="nav-item"  >
    //         <a class="nav-link" href="#">Card</a>
    //       </li>
    //       <li class="nav-item"  >
    //         <a class="nav-link" href="#">Payment Gateway</a>
    //       </li>
    //       <li className="add-to-cart">
    //       <span className="cart-count">{props.data.length}</span>

    //       <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />

    //       </li>

    //     </ul>

    //   </div>
    // </nav>

    //         </div>
  );
}

export default Navbar;
