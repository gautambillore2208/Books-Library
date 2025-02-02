import './style.css';
import { Link } from 'react-router-dom';
import Search from "./Search";
import { useEffect, useState } from 'react';
import Book from "./Book.jsx";
import { Books } from '../utils/mockData.js';

function BookList(props) {
   const [filteredBooks, setFilteredBooks] = useState(Books);  

   function filterSearchList(filtered) {
      setFilteredBooks(filtered);  
   }

   // useEffect(() => {
   //    fetchDeta();
   // }, []);

   // async function fetchDeta() {
   //    const response = await fetch("https://openlibrary.org/search.json?q=book&limit=50");
   //    const data = await response.json();
   //    console.log(data, "deta");

      
   //    setFilteredBooks(data.docs || []);  
   // }

   return (
      <>
         <Search filterfun={filterSearchList} />  
         <div className="booklist">
            {Array.isArray(filteredBooks) && filteredBooks.length > 0 ? (
               filteredBooks.map((book) => (  
                  <Link to={`/book/${book.id}`} key={book.id}>  
                     <Book bookDetails={book} />
                  </Link>
               ))
            ) : (
               <p>No books found</p> 
            )}
         </div>
      </>
   );
}

export default BookList;

 