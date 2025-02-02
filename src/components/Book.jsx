
// import './style.css';
// function Book(props) {

//   return (
  
//     <>
 
//     <div className="book-card">
//       <img
//         src={props.bookDetails.coverImage}
//         alt={title}
//         width="200px"
//         className="book-cover"
//       />
//       <div className="book-details">
//         <h2 className="book-title">{props.bookDetails.title}</h2>
//         <h3 className="book-author">{author_name}</h3>
//         <p className="book-description">{description}</p>
       
//       </div>
//     </div>
//      </>
//   );
// }


// export default Book;





// import './style.css';

// function Book(props) {
 
//   return (
//     <div className="book-card">
//       <img
//         src={getBookCoverImage(props.bookDetails.coverImage)} // Use function to get the cover image URL
//         alt={title}
//         width="200px"
//         className="book-cover"
//       />
//       <div className="book-details">
//         <h2 className="book-title">{title}</h2>
//         {/* <h3 className="book-author">{Array.isArray(author_name) ? author_name.join(", ") : author_name}</h3> */}
//         {/* Display description or a fallback if no description */}
//         <p className="book-description">{description || "No description available."}</p>
//       </div>
//     </div>
//   );
// }

// export default Book;




















// src/components/Book.jsx
import './style.css';

function Book(props) {
  const { title, author_name, description, coverImage } = props.bookDetails;

  return (
    <>
      <div className="book-card">
        {/* Check if coverImage exists */}
        <img
          src={coverImage || 'https://via.placeholder.com/200'}
          alt={title}
          width="200px"
          className="book-cover"
        />
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author_name}</h3>
          <p className="book-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Book;









