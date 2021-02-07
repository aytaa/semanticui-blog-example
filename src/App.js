import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
)

export default App;