import React from "react";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Home from "./Component/pages/Home";
import About from "./Component/pages/About";
import NotFound from "./Component/pages/NotFound";
import Team from "./Component/pages/Team";
import Aina from "./Component/pages/Aina";
import Harilanto from "./Component/pages/Harilanto"
import Rotsy from "./Component/pages/Rotsy";
import Tahiry from "./Component/pages/Tahiry"
import Toavina from "./Component/pages/Toavina"


const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/Team' element={<Team/>}/>
          <Route exact path='/Notfound' element={<NotFound/>}/>
          <Route exact path='/Aina' element={<Aina/>}/>
          <Route exact path='/Harilanto' element={<Harilanto/>}/>
          <Route exact path='/Rotsy' element={<Rotsy/>}/>
          <Route exact path='/Tahiry' element={<Tahiry/>}/>
          <Route exact path='/Toavina' element={<Toavina/>}/>
      </Routes>
    </Router>
  )
}

export default App;