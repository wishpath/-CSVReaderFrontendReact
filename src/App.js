import UploadEmployees from "./components/UploadEmployees";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UploadEmployees/>} /> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;
