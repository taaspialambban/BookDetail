
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';



const ListBook = () => {

    const [tabIndex , setTabIndex] = useState([0]);

    return (
       <div>   
         <h2 className='text-5xl flex items-center justify-center border border-none rounded-2xl
         h-[100px] bg-gray-200 font-bold text-black'>Books</h2>   
         <div className="flex items-start mt-16 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">
	<Link 
    to=''
    onClick={()=> setTabIndex(0)}
     rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 border-[#1313134D] text-lg font-medium' : 'border-b text-lg font-normal border-[#1313134D]'}  dark:text-gray-600`}>
		<span>Read Books</span>
	</Link>
	<Link
     to={`wishlist`}
    onClick={()=> setTabIndex(1)}
     rel="noopener noreferrer" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 text-lg font-medium border-[#1313134D]' : 'border-b border-[#1313134D] text-lg font-normal'}  dark:text-gray-600`}>
		<span>WishList Book</span>
	</Link>
	
</div>

<Outlet></Outlet>

       </div>
    );
};

export default ListBook;