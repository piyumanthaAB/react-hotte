import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import BlogPost from './Pages/BlogPost';
import Error from './Pages/Error';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import ScrollToTop from './Hooks/useScrollTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar />
        
          <div className="content">
            <Switch>
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
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
