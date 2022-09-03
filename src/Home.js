import React from 'react';
import Product from './Product.js'
import "./Home.css";

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
                className='home_image' 
                src='https://m.media-amazon.com/images/I/61rX6Z0x19L._SR3000,600_.jpg'
                alt='' 
            />
            <div className='home_row'>
                <Product 
                    id="3143524"
                    title='Ugly Love: A Novel aheart-wrenching love story that proves attraction'
                    price={11.99}
                    image='https://m.media-amazon.com/images/I/613KCs7szvL._AC_SY200_.jpg'
                    rating={5}
                />
                <Product 
                    id="5732674"
                    title='Fire TV Stick with Alexa Voice Remote (includes TV controls), HD streaming'
                    price={39.99}
                    image='https://m.media-amazon.com/images/I/51KKR5uGn6L._AC_SX425_.jpg'
                    rating={4}
                />
            </div>

            <div className='home_row'>
                <Product 
                    id="9284712"
                    title='Jarrow Formulas Nicotinamide Mononucleotide'
                    price={37.89}
                    image='https://m.media-amazon.com/images/I/61jFcgVzGGL._AC_SX425_.jpg'
                    rating={4}
                />
                <Product 
                    id="9481935"
                    title='Multi-Compartment Automotive SUV Car Organizer'
                    price={26.99}
                    image='https://m.media-amazon.com/images/I/810byQ26oYS._AC_SY355_.jpg'
                    rating={3}
                />
                <Product 
                    id="5853452"
                    title='Soft TPU Sport Strap Replacement Bands Sense'
                    price={13.59}
                    image='https://m.media-amazon.com/images/I/61RwtW82zQL._AC_SX425_.jpg'
                    rating={4}
                />
            </div>

            <div className='home_row'>
                <Product 
                    id="1849203"
                    title='Insignia 42-inch Class F20 Series Smart Full HD 1080p Fire TV (NS-42F201NA22, 2021 Model), (1080p resolution, Alexa voice control, Access thousands of shows with Fire TV, DTS TruSurround)'
                    price={179.99}
                    image='https://m.media-amazon.com/images/I/81kQyu0HvbL._AC_SL1500_.jpg'
                    rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home;
