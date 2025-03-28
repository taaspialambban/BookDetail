// import BookCover from '';

import { NavLink } from 'react-router-dom';
import BookCover from '../../assets/BookCover.jpg';


const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-3xl">
           <div className="flex justify-between px-20">
           <div className='py-28'>
      <h1 className="text-5xl font-bold">Books to freshen 
       <br /> up your bookshelf</h1>
      <NavLink to="/listBook"><button className="self-center px-6 py-3 text-white font-semibold rounded-lg bg-[#23BE0A] mt-12">View The List</button></NavLink>
    </div>
  <div className="py-20">
  <img src={BookCover} alt="Book Cover" className='w-[380px]' />  
  </div>
</div>
        </div>
    );
};

export default Banner;