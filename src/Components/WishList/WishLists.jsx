import { useEffect, useState } from "react";
import { getItem} from "../../Utils";
import WishList from "./WishList";


const WishLists = () => {
    const[wishBook, setWishBook] = useState([])
    useEffect(()=>{
        const bookStore = getItem('wishlist')
        setWishBook(bookStore)
        console.log(bookStore)
    },[]);
    console.log(wishBook)

    return (
        <div>
            <div className="flex flex-col gap-6 mt-9">
                {
                    wishBook.map(w =><WishList w={w}></WishList>)
                }
            </div>
        </div>
    );
};

export default WishLists;