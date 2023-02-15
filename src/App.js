import Employees from "./components/Employees";
import NotFound from "./components/NotFound";
import Upload from "./components/Upload";
import Layout from "./pages/Layout";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";

function App(){
  return (
    <>
    {/* <Layout/> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Employees/>} /> 
        <Route path="*" element={<NotFound/>}/>
        <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </Router>
    </>

  )
}

export default App;
