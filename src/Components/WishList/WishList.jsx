import React from 'react';


const WishList = ({w}) => {
  console.log(w)
    return (
        <div className='flex gap-6 p-4 border rounded-2xl border-[#13131326] shadow-xs drop-shadow-xs'>
        <div className='w-[390px] h-[230px] border rounded-2xl px-7 border-none py-4 bg-[#1313130D]'>
         <img src={w.image} className='w-[320px] h-[192px]' alt="" />
        </div>
        <div className='w-[667px] space-y-4'>
         <h2 className='text-2xl font-bold'>{w.bookName}</h2>
         <h2 className='text-lg font-medium'>By:{w.author}</h2>
        <div className='flex gap-6'
        ><h2 className='text-base font-bold space-x-3'>Tags :<span className='text-[#23BE0A] pl-3'>{w.tags.map(tag => `#${tag}`).join(" ")}</span></h2>
        <h2>Year of Publishing : {w.yearOfPublishing}</h2>
        </div>
        <div className='flex gap-5'>
        <h2>Publisher : {w.publisher}</h2>
        <h2>Page :{w.totalPages}</h2>
        </div>
        <hr />
         <div className='flex gap-4'>
         <h2 className='border rounded-full border-none flex items-center justify-center text-[#328EFF] bg-[#328EFF26] w-[174px] h-[41px]'>Category :{w.category}</h2>
         <h2 className='border rounded-full border-none flex items-center justify-center font-bold text-orange-400 bg-[#FFAC3326] w-[123px] h-[41px]'>Rating :{w.rating}</h2>
         <button className='text-white bg-[#23BE0A] border rounded-full w-[150px] h-[41px] flex items-center justify-center'>View Details</button>
         </div>
        
        </div>
     </div>
    );
};

export default WishList;