import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import BookList from './components/BookList.jsx';
import BookDetails from './components/BookDetails.jsx'; // Ensure correct path
import Header from './components/Header.jsx';

// Set up routing using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <BookList />, // Main book list page as child of "/"
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",  // Book details page
        element: <BookDetails />,
      },
    ],
    errorElement: <Error />, // Error page in case of invalid routes
  },
]);

// Render the app to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
