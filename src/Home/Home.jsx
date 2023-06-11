import React from 'react';
import Slider from './Slider';
import PopularClass from './PopularClass';
import { Fade, JackInTheBox, Roll, Zoom } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div>
            <Zoom>
            <Slider></Slider>
            </Zoom>
           <JackInTheBox>
           <PopularClass></PopularClass>
           </JackInTheBox>
        </div>
    );
};

export default Home;