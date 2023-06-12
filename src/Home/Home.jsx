import React from 'react';
import Slider from './Slider';
import PopularClass from './PopularClass';
import { Fade,  JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';
import Instructor from '../Instructor/Instructor';
import Footer from './Footer';
import Lottie from 'lottie-react';
import wave from '../../src/assets/Lotties/wave.json'
const Home = () => {
    return (
        <div>
            <Zoom>
            <Slider></Slider>
            </Zoom>
           <JackInTheBox>
           <PopularClass></PopularClass>
           </JackInTheBox>
           <Fade>
           <div>
            <h2 className='text-4xl text-center my-10 border-y py-10'>Popular Popular Instructors</h2>
           <Instructor></Instructor>
           </div>
           </Fade>
            <div>
                
                <Lottie animationData={wave}></Lottie>
                <hr />
            </div>
        </div>
    );
};

export default Home;