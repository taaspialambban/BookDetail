
import toast from "react-hot-toast";

export const getItem = (key ='book')=>{
let books = [];
const storageBook = localStorage.getItem(key);
if(storageBook){
    books = JSON.parse(storageBook)
}
return books;
}

export const saveItem = book =>{
    const books = getItem()
    const isExist = books.find(b => b.id ===book.id);
    if(isExist){
        return toast.error('already add')
    }
    books.push(book)
    localStorage.setItem('book', JSON.stringify(books));
    toast.success('add this book');
}

export const wishButton = (book) => {
    const readBooks = getItem("book"); // Read books are stored in "book"
    const wishlistBooks = getItem("wishlist"); // Wishlist stored separately
  
    const isRead = readBooks.find((b) => b.id === book.id);
    const isInWishlist = wishlistBooks.find((b) => b.id === book.id);
  
    if (isRead) {
      return toast.error("Error: Can't add to wishlist after reading!");
    }
  
    if (isInWishlist) {
      return toast.error("Already in Wishlist");
    }
  
    wishlistBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(wishlistBooks));
    toast.success("Book added to Wishlist");
  };