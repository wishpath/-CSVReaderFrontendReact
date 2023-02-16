import Navbar from "./components/Navbar";
import Employees from "./components/Employees";
import NotFound from "./components/NotFound";
import Upload from "./components/Upload";
import About from "./components/About";
import {Routes, Route} from "react-router-dom";

function App(){
  return (
    <>
    <Navbar className="container"/>
      <Routes>
        <Route exact path="/employees" element={<Employees/>} /> 
        <Route path="*" element={<NotFound/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/" element={<About/>}/>
      </Routes>
    </>

  )
}

export default App;