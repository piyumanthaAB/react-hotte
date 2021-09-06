import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  Route, Switch, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import BlogPost from './Pages/BlogPost';
import Error from './Pages/Error';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import ScrollToTop from './Hooks/useScrollTop';

import { AnimatePresence } from 'framer-motion';

function App() {

  AOS.init();
  AOS.refresh();
  const location = useLocation();

  return (
    <ScrollToTop >
      <div className="App">
        <Navbar />
          
        <div className="content">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/blog'>
                <Blog />
              </Route>
              <Route exact path='/post/:id'>
                <BlogPost />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route path='*'>
                <Error />
              </Route>
            </Switch>
              
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
