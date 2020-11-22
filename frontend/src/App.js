import './App.css';
import './bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


const App=()=>{
  return(
  <>
    <Header/>
    <main>
      <h1>Welcome to e-com</h1>
    </main>
    <Footer/>
    </>
  );
}

export default App;
