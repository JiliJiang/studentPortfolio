
import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact';
import Navigation from './components/Navigation'



export default function App(){

  const [currentPage, handlePageChange] = useState('About Me');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = (currentPage) => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  
  return(
    
    <>

      <Header/>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
     </>   
        
      
    
  )
}