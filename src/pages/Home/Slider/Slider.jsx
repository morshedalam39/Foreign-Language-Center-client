

import { Link } from 'react-router-dom';
import slider1 from '../../../assets/slider/11.jpg'
import slider2 from '../../../assets/slider/22.jpg'
import slider3 from '../../../assets/slider/33.jpg'
import slider4 from '../../../assets/slider/44.jpg'
// import slider5 from '../../../assets/slider/55.jpg'




const Slider = () => {
    return (
        <>
            <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-4xl font-bold">
            "Unlock Your Global Potential: Learn a New Language with Us!"
            </h2>
            <p>
            Explore the World: Learn a New Language. Flexible courses, expert instructors, immersive experience. Boost fluency, connect with a vibrant community.Join us now!"
            </p>
            <div>
              <Link to='/classes'>
              <button className="btn btn-outline btn-secondary">
                Latest Classes
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-4xl font-bold">
            "Unlock Your Global Potential: Learn a New Language with Us!"
            </h2>
            <p>
            Explore the World: Learn a New Language. Flexible courses, expert instructors, immersive experience. Boost fluency, connect with a vibrant community.Join us now!"
            </p>
            <div>
              <Link to='/classes'>
              <button className="btn btn-outline btn-secondary">
                Latest Classes
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-4xl font-bold">
            "Unlock Your Global Potential: Learn a New Language with Us!"
            </h2>
            <p>
            Explore the World: Learn a New Language. Flexible courses, expert instructors, immersive experience. Boost fluency, connect with a vibrant community.Join us now!"
            </p>
            <div>
              <Link to='/classes'>
              <button className="btn btn-outline btn-secondary">
                Latest Classes
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-4xl font-bold">
            "Unlock Your Global Potential: Learn a New Language with Us!"
            </h2>
            <p>
            Explore the World: Learn a New Language. Flexible courses, expert instructors, immersive experience. Boost fluency, connect with a vibrant community.Join us now!"
            </p>
            <div>
              <Link to='/classes'>
              <button className="btn btn-outline btn-secondary">
                Latest Classes
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
        </>
    );
};

export default Slider;