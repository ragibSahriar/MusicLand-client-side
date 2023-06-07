import React from 'react';

const Slider = () => {
  return (
    <div>
      <div className="carousel container mx-auto  h-1/2">
        <div id="item1" className="carousel-item w-full relative">
          <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-8.jpg" className="w-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className=" text-3xl font-bold  text-white p-1 bg-sky-700">Welcome to our Music School</h2>
            <p className="text-white bg-zinc-400 p-2 rounded mt-2">Explore your musical journey with expert instructors and state-of-the-art facilities.</p>
          </div>
        </div>
        
        <div id="item2" className="carousel-item w-full  relative">
          <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-17.jpg" className="w-full h-full" />
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className=" text-3xl font-bold  text-white p-1 bg-sky-700">Discover Your Passion for Music</h2>
            <p className="text-white bg-zinc-400 p-2 rounded mt-2">Unleash your creativity and find joy in playing various musical instruments.</p>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full h-1/2 relative">
          <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-18.jpg" className="w-full h-full" />
          <div className="absolute bottom-0 left-0 p-4 text-black">
            <h2 className=" text-3xl font-bold  text-white p-1 bg-sky-700">Join Our Music Ensembles</h2>
            <p className="text-white bg-zinc-400 p-2 rounded mt-2">Collaborate with fellow musicians and showcase your talent in our dynamic music ensembles.</p>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full h-1/2 relative">
          <img src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-16.jpg" className="w-full h-full" />
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className=" text-3xl font-bold  text-white p-1 bg-sky-700">Experience the Magic of Music</h2>
            <p className="text-white bg-zinc-400 p-2 rounded mt-2">Immerse yourself in the transformative power of music and let it inspire your soul.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Slider;
