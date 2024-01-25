import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { LoginPage } from './components/LoginPage';
import { Data } from './components/Data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import { NotFound } from './components/NotFound';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  function onLogin(value){
    console.log(value);
  }

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home user={user}/>}>
            <Route path='/data' element={<Data/>}/>
          </Route>
          <Route path='/data' element={<Data/>}/>
          <Route path='/login' element={<LoginPage onLogin={onLogin}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
