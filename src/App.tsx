import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import StandardSearch from "./pages/StandardSearch";
import Listing from "./pages/Listing";
import MainComponent from "./pages/data";
import ImageGallery from "./components/ImageGallery";
import MainPage from "./pages/MainPage";
import GenerateSitePage from "./pages/sitemap"
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
        <Route path='/' element = {<MainPage/>}/>
          <Route path='/Search/:city_name' element = {<StandardSearch/>}/>
          <Route path='/listing/:id' element={<Listing/>} />
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
    </div>
  );
}
export default App;
