import './App.css';
import { Contact } from './Pages/contact/contact';
import { Header } from './Components/headerFooter/header';
import { Footer } from './Components/headerFooter/footer';
import { RestrictedPage } from './restrictedPage/restricted';
import { Faq } from './faq/faq';
import { About } from './about/about';
import { NotFound } from './Pages/404/404';
import { Home } from './Pages/home/home';
import { Services } from './servicesPage/services';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import { ImagesApi } from './Components/ImagesApi/ImagesApi';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/restricted-page' element={<RestrictedPage />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/aboutus' element={<About />}></Route>
        <Route path='/error' element={<NotFound />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<div>HELLO!</div>}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/cookies-policy' element={<Cookies />}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
        {ImagesApi.map(
          (
            item: {
              pictures: any[],
              name: string,
              about: { location: string, info: string },
            },
            index: number
          ) => {
            return (
              <Route
                key={index}
                path={`/${item.name}`}
                element={
                  <h1>{item.name}</h1>
                  // <Project
                  //   projectPictures={item.pictures}
                  //   projectTitle={item.name}
                  //   about={{
                  //     location: item.about.location,
                  //     info: item.about.info,
                  //   }}
                  // />
                }
              />
            );
          }
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
