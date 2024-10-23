
import banner from '../assets/images/chef.jpg'
const Banner = () => {
    return (
        <div>
            <div
  className="hero w-11/12 mx-auto">
    <img className='w-full h-[600px] rounded-3xl' src={banner} alt="" />
  <div className="hero-overlay bg-opacity-50 rounded-3xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-8/12">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <div className='flex justify-center gap-3 pt-8'>
      <button className="bg-green-400 text-black rounded-full py-2 px-4 font-bold">Explore Now</button>
      <button className="border rounded-full py-2 px-4 font-bold">Our Feedback</button>
      </div>
    </div>
  </div>
  </div>
        </div>
    );
};

export default Banner;