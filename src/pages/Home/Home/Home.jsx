import React from 'react';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstractor from '../PopularInstractor/PopularInstractor';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <PopularInstractor></PopularInstractor>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;