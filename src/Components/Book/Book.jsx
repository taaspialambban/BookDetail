import React from 'react';
import { NavLink } from 'react-router-dom';

const Book = ({book}) => {
    const { image , tags, bookName, author, category, rating} = book;
    return (
	<div className="">
	<NavLink to={`/books/${book.id}`}>
    <div className="rounded-xl border-[#13131326] shadow-lg drop-shadow-2xl mt-5 p-4">
        <img src={image} className=" w-full h-52 rounded-2xl bg-[#F3F3F3]" />
<div className="flex flex-col flex-1 p-6">
    <h2>{tags}</h2>
    <h2 className='text-2xl font-bold'>{bookName}</h2>
    <h2>{author}</h2>
    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
    <span>{category}</span>
        <span>{rating}</span>
    </div>
</div>
    </div>
    </NavLink>


	{/* <Link to={`/books/${book.id}`}>
	<div className="rounded-xl border-[#13131326] shadow-lg drop-shadow-2xl mt-5 p-4">
        <img src={image} className=" w-full h-52 rounded-2xl bg-[#F3F3F3]" />
<div className="flex flex-col flex-1 p-6">
    <h2>{tags}</h2>
    <h2 className='text-2xl font-bold'>{bookName}</h2>
    <h2>{author}</h2>
    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
    <span>{category}</span>
        <span>{rating}</span>
    </div>
</div>
    </div></Link> */}
            
	</div>
    )
};

export default Book;