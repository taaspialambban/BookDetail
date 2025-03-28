
import Banner from '../Components/Banner/Banner';
import Book from '../Components/Book/Book';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const books = useLoaderData();
    // console.log(books)
    return (
        <div>
            <Banner></Banner>
            <div className='mt-14'>
                <h2 className='text-5xl flex items-center justify-center font-bold text-black'>Books</h2>
                <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;