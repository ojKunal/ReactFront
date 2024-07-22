import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import StandardSearch from "./pages/StandardSearch";
import Listing from "./pages/Listing";
import Landingpage from "./pages/Landing";
import MainComponent from "./pages/data";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <div>
        <Routes>
          <Route path='/StandardSearch' element = {<StandardSearch/>}/>
          <Route path='/listing' element = {<Listing/>}/>
          <Route path='/' element = {<Landingpage/>}/>          
        </Routes>
    </div>
  );
}
export default App;
