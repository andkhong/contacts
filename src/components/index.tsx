import * as React from 'react';
import './index.css';

import List from './List/';
import Search from './Search/';
import Footer from './Footer/';
// import Detail from './Detail/';

import {
  BrowserRouter as Router,
  // Route
} from 'react-router-dom'

function App() {
    return (
      <Router>
        <div className="App">

          <div className="left"> 
            <Search />
            <List />
          </div>
        

          <div>
            <Footer />
          </div>

        </div>
      </Router>
    );
}

export default App;


// const CustomLinkExample = () => (
//   <Router>
//     <div>
//       <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
//       <OldSchoolMenuLink to="/about" label="About"/>
//       <hr/>
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//     </div>
//   </Router>
// )

// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//     <div className={match ? 'active' : ''}>
//       {match ? '> ' : ''}<Link to={to}>{label}</Link>
//     </div>
//   )}/>
// )

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

