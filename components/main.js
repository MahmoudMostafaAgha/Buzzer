import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot ,faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDocs , collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";


const Main = () => {


  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "Restaurants"));
        const restaurantData = [];
        querySnapshot.forEach((doc) => {
          restaurantData.push(doc.data());
        });
        setRestaurants(restaurantData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  
  return (
    <div>
      <section className="home-section row">
        <div className="section-imgs col-md-5">
          <div className="section-img-1" />

          <div className="section-img-2" />
        </div>
        <div className="section-text col-md-5">
          <h3>Welcome TO Our Luxury Restaurant</h3>
          <img src="frames.svg" className="frames" />
          <p className="section-paragraph">
            Welcome to our exquisite salon, where beauty meets expertise. Step
            into a world of luxury and indulgence, where we are dedicated to
            enhancing your natural beauty and leaving you feeling radiant.
          </p>
          <a href="#" className="section-link">
            View All
          </a>
        </div>
      </section>
      {/* resturants section */}
      <section className="restaurants-section">
        <div className="d-flex flex-column align-items-center">
          <h2>Our Restaurants</h2>
          <img src="frames.svg" className="frames" />
        </div>
        <div className="resturants row">
        
        {restaurants.map((restaurant, index) => (
  <div className="restaurant-card col-md-2" key={index}>
    <img src={restaurant.photoUrl} alt={restaurant.name} className="resturant-img" />
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < restaurant.rate ? "checked" : ""}
        />
      ))}
    </div>
    <h3 className="name">{restaurant.name}</h3>
    <div className="type">{restaurant.type}</div>
    <div className="location">
      <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
      {restaurant.location}
    </div>
  </div>
))}

        </div>
        <a href="#" className="section-link">
          View All
        </a>
      </section>
      {/* services section */}
      <section className="services-section">
        <div className="d-flex flex-column align-items-center">
          <h2>Our Services</h2>
          <img src="frames.svg" className="frames" />
        </div>
        <div className="services-cards row">
          <div className="service-card col-2">
            <img src="service-1.svg" className="service-icon" />
            Special Menu
          </div>
          <div className="service-card col-2">
            <img src="service-2.svg" className="service-icon" />
            Tasty Food
          </div>
          <div className="service-card col-2">
            <img src="service-3.svg" className="service-icon" />
            Free Wi-Fi
          </div>
          <div className="service-card col-2">
            <img src="service-4.svg" className="service-icon" />
            Special Offer
          </div>
          <img src="burger.png" className="burger-left" width={1} />
          <img src="burger.png" className="burger-right" width={1} />
        </div>
      </section>
      {/* near section */}
      <section className="map-section">
  <div className="d-flex flex-column align-items-center">
    <h2>Nearest Restaurants</h2>
    <img src="frames.svg" className="frames" alt="frames" />
  </div>
  <div className="map-search-bar">
    <div className="search-input-container">
      <input type="search" placeholder="Search" className="map-search-input" />
      <FontAwesomeIcon icon={faSearch} className="map-search-icon" />
    </div>
    <button className="map-search-btn">Search</button>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31694.722160214717!2d-122.41941541817281!3d37.774929494174145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a6248d891%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648620019751!5m2!1sen!2sus&gestureHandling=cooperative"  aria-hidden="false" className="map"></iframe>
</section>
  <div className="resturants row mt-4">
  {restaurants.map((restaurant, index) => (
  <div className="restaurant-card col-md-2" key={index}>
    <img src={restaurant.photoUrl} alt={restaurant.name} className="resturant-img" />
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < restaurant.rate ? "checked" : ""}
        />
      ))}
    </div>
    <h3 className="name">{restaurant.name}</h3>
    <div className="type">{restaurant.type}</div>
    <div className="location">
      <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
      {restaurant.location}
    </div>
  </div>
))}
        </div>

{/* gallery section */}
<section className="services-section">
<div className="d-flex flex-column align-items-center">
    <h2>Gallery</h2>
    <img src="frames.svg" className="frames" alt="frames" />
  </div>
  <div className="container">


    <div className="gallery ">
      <img className="gallery-item " src="gallery-item.PNG"/>
      <img className="gallery-item " src="gallery-item.PNG"/>
      <img className="gallery-item " src="gallery-item.PNG"/>
      <img className="gallery-item " src="gallery-item.PNG"/>
    </div>
    </div>
</section>
    </div>
  );
};

export default Main;
