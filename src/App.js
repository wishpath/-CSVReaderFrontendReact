import Employees from "./components/Employees";
import NotFound from "./components/NotFound";
import Upload from "./components/Upload";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Employees/>} /> 
        <Route path="*" element={<NotFound/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </Router>
  )
}

export default App;
