// import { useParams } from "react-router-dom";
// import { Books } from "../utils/mockData";
// import "./bookdeta.css"

// function BookDeatils(){
//     const params = useParams()
//    const book =  Books.filter(book=>book.id == params.id)
//     return(
//         <>
//         <h1>{`bookdeatils id ${params.id}`}</h1>
//         {book.map((book)=>{
//             return<>
//                 <h2 className="font-extrabold">{book.title}</h2>
//                 <h2 className="font-extrabold">{book.authorName}</h2>
//                 <img
//   src={book.coverImage}
//   alt={book.title}
//   className="rounded-xl  p-2  h-auto ml-4 mb-4 max-w-2xs"
// />


//                 <h2 className="font-extrabold">{book.description}</h2>
//                 <h2 className="font-extrabold">{book.publishDate}</h2>
              
            
//             </>
//         })}

      
//         </>
//     )
// }

// export default BookDeatils;




import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import "./bookdeta.css";

function BookDetails() {
  const params = useParams();
  const book = Books.find((book) => book.id == params.id);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 text-gray-900">
        <h1 className="text-xl font-extrabold text-red-600">Book Not Found!</h1>
      </div>
    );
  }

  return (
  
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-r from-[#edede9] via-[#d5bdaf] to-white w-full h-screen">
      <h1 className="text-xl sm:text-xl font-extrabold text-center text-gray-800 mb-6">
        Book Details: {book.title}
      </h1>

      <div className="max-w-screen-lg mx-auto bg-[#cad2c5] shadow-xl rounded-lg overflow-hidden ">
        <div className="md:flex ">
        
          <div className="md:w-1/3 p-4">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-xl h-auto rounded shadow-lg object-cover overflow-hidden "
            />
          </div>

          {/* Book Details */}
          <div className="md:w-2/3 p-6 flex flex-col justify-between gap-6"> {/* Added gap-6 here */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{book.title}</h2>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-4">{book.authorName}</h3>

            <p className="text-xl text-gray-700 mb-6">{book.description}</p>

            <div className="flex flex-col space-y-2">
              <p className="text-lg text-gray-800">
                <strong>Published on:</strong> {book.publishDate}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-gray-800 font-medium">Rating:</span>
                <span className="text-yellow-500 font-semibold">★★★★☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default BookDetails;
