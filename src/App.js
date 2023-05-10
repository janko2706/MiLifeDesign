import './App.css';
import { Contact } from './Pages/contact/contact';
import { Header } from './Components/headerFooter/header';
import { Footer } from './Components/headerFooter/footer';
import { RestrictedPage } from './Pages/restrictedPage/restricted';
import { Faq } from './Pages/faq/faq';
import { About } from './Pages/about/about';
import Project from './Pages/Project/Project';
import { NotFound } from './Pages/404/404';
import { Home } from './Pages/home/home';
import Projects from './Pages/Projects/Projects';
import { Services } from './Pages/servicesPage/services';
import { Terms } from './Pages/Allterms/terms';
import { Cookies } from './Pages/Allterms/cookies';
import { Privacy } from './Pages/Allterms/privacy';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { SmoothScroll } from './smooth';
import { ImagesApi } from './Components/ImagesApi/ImagesApi';

function App() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        JSON.stringify(
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      );
    },
    false
  );
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
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/cookies-policy' element={<Cookies />}></Route>
        <Route path='/privacy-policy' element={<Privacy />}></Route>
        {ImagesApi.map((item, index) => {
          return (
            <Route
              key={index}
              path={`/${item.name}`}
              element={
                <Project
                  projectPictures={item.pictures}
                  projectTitle={item.name}
                  about={{
                    location: item.about.location,
                    info: item.about.info,
                  }}
                />
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
