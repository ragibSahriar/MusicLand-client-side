import React from 'react';
import Slider from './Slider';
import PopularClass from './PopularClass';
import { Fade, JackInTheBox, Roll, Zoom } from 'react-awesome-reveal';
import Instructor from '../Instructor/Instructor';

const Home = () => {
    return (
        <div>
            <Zoom>
            <Slider></Slider>
            </Zoom>
           <JackInTheBox>
           <PopularClass></PopularClass>
           </JackInTheBox>
           <div>
            <h2 className='text-4xl text-center my-10 border-y py-10'>Popular Popular Instructors</h2>
           <Instructor></Instructor>
           </div>
        </div>
    );
};

export default Home;