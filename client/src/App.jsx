
import './App.css'
import Landing from './views/landing/Landing.jsx';
import Home from "./views/home/Home.jsx"
import Details from './views/detail/detail.jsx';
import Nav from "./components/nav/Nav.jsx"
import Form from "./views/form/Form.jsx"
import { Routes, Route, useLocation} from "react-router-dom";


function App() {
const {pathname} = useLocation()

  return (
    <>
    {pathname !== '/' && <Nav/>}
    <Routes>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/detail/:idKey" element={<Details />} />
      <Route path="/form" element={<Form></Form>}></Route>
    </Routes>
    </>
  )
}

export default App
