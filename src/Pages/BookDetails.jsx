
import { NavLink, useLoaderData } from 'react-router-dom';
import { saveItem, wishButton } from '../Utils';



const BookDetails = () => {
    const bookDetail = useLoaderData();

    // console.log(bookDetail.id)
    // const [wishlist, setWishlist] = useState([])

    const handleReadBook = (bookDetail) =>{
      saveItem(bookDetail)
    }

    const handleWishList = (bookDetail) =>{
      wishButton(bookDetail)
    }
   
    return (
      <div className="">
      <div className="flex gap-9">
        <div className='w-[573px] h-[411px] p-16 rounded-2xl bg-[#1313130D]'>
        <img
          src={bookDetail.image}
          className="h-fit w-fit" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{bookDetail.bookName}</h1>
          <h2 className='py-3 text-xl font-medium'>By : {bookDetail.author}</h2>
          <hr className='text-[#13131326]'/>
          <h3 className='py-3 text-xl font-medium'>{bookDetail.category}</h3>
          <hr className='text-[#13131326]' />
          <h2> <span className='text-lg font-bold'>Review : </span> {bookDetail.review}</h2>
          <h2 className='py-4'> <span className='text-lg font-bold'>Tag  </span> <span className='text-[#23BE0A] pl-5'>#{bookDetail.tags}</span></h2>
          <div className='flex'>
            <div className='w-[200px] space-y-1.5 pr-4'>
              <h2>Number of Pages:</h2>
              <h2>Publisher:</h2>
              <h2>Year of Publishing:</h2>
              <h2>Rating:</h2>
            </div>
            <div className='text-lg font-semibold'>
              <p>{bookDetail.totalPages}</p>
              <p>{bookDetail.publisher}</p>
              <p>{bookDetail.yearOfPublishing}</p>
              <p>{bookDetail.rating}</p>
            </div>
          </div>

          {/* Button sector */}
       {/* <NavLink
        to={`/listBook/${bookDetail.id}`}
        > 
         `/books/${book.id}` */}
       <div className='flex mt-5 gap-4'>
        
        <button onClick={()=> handleReadBook(bookDetail)} className='w-[80px] h-[47px] border-2 border-[#1313134D] text-black text-lg font-semibold rounded-lg hover:bg-[#23BE0A] hover:text-white'>Read</button>
       
      <button onClick={()=> handleWishList(bookDetail)} className='w-[108px] h-[47px] rounded-lg text-white text-lg font-semibold bg-[#50B1C9]'>Wishlist</button>
      
      </div>
       
        </div>
      </div>
    </div>
    );
};

export default BookDetails;