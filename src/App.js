import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import ManageItems from './Pages/ManageItems/ManageItems';
import SignUp from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='manageItems' element={<ManageItems/>}></Route>
        <Route path='signUp' element={<SignUp/>}></Route>
        <Route path='signIn' element={<SignUp/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
