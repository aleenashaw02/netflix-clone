import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import Movies from "./pages/Movies";
import BackgroundImage from "./components/BackgroundImage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/tv' element={<TvShow/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/movie' element={<Movies/>}/>
      </Routes> */}
      {/* <BackgroundImage/> */}
      {/* <Header /> */}
      <SignUp />
    </BrowserRouter>
  );
}

export default App;
