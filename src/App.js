import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignIn from "./components/Auth/Login";
import SignUp from './components/Auth/SignUp'
import { BrowserRouter as Router , Route , Redirect } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" render={Home}/>
            <Route exact path="/signin" render={SignIn}/>
            <Route exact path="/signup" render={SignUp}/>
            <Footer />
        </div>
    </Router>
)

export default App;