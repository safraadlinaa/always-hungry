import React, { useState } from "react";
import Menu from "../Pages/Menu";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import { useContext } from "react";
import "../styles.css";
import "../Styles/Menu.css";
import heart from "../Assets/heart02.png";
import favedHeart from "../Assets/full_heart.png";

function MenuItem({ meal, image, name, category }) {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="menuItem">
      <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <div className="name-category">
          <h1> {name} </h1>
          {category && <p> Category: {category} </p>}
        </div>
      </Link>
      {/* {console.log(cart.includes(meal))} */}
      {cart.some((x) => x.idMeal === meal.idMeal) ? (
        <button
          className="remove removeFav"
          onClick={() => {
            setCart(cart.filter((c) => c.idMeal !== meal.idMeal));
            localStorage.removeItem(meal.idMeal);
          }}
        >
          {/* Remove from Favourites */}

          <div className="fav-window">
            <div className="fav-button-text">Remove from Favourites</div>
          </div>
          <img className="fav-image" src={favedHeart} />
        </button>
      ) : (
        <button
          className="add addFav"
          onClick={() => {
            setCart([...cart, meal]);
            localStorage.setItem(meal.idMeal, JSON.stringify(meal));
          }}
        >
          {/* Add to Favourites */}

          <div className="fav-window">
            <div className="fav-button-text">Add to Favourites</div>
          </div>
          <img className="fav-image" src={heart} />
        </button>
      )}
    </div>
  );
}

export default MenuItem;
