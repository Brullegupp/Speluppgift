<<<<<<< HEAD

import Menu from "./components/Menu.js";

=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.js";
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
import Login from "./components/Login.js";
import Register from "./components/Register.js";


<<<<<<< HEAD
function App() {
  return (

    <div>
      <h1>Escape The Woods</h1>
      <Login />
      <Register />

      <Menu />
      </div>
=======

function App() {
  return (
    <BrowserRouter>
    
    <div className="container">
      <h1>Escape The Woods</h1>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/Menu" exact element={<Menu />} />



        </Routes>
      
      </div>
      </BrowserRouter>
>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
  )
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> f4df84eda77289ec87d97b2629bec5ecc93d2610
