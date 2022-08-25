import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center banner-text'>
                <div className='w-50 mx-auto bg- text-center'>
                    <h1>100% FRESH & ORGANIC</h1>
                    <p>Organic and responsibly sourced food is what the modern customer demands. These name suggestions have the flexibility to provide you with ideas for an organic packaged good product, restaurant, food truck other anything else.</p>
                    <button type="button" class="btn btn-outline-info banner-text"> Explore more</button>
                </div>
           
        </div>
    );
};

export default Banner;