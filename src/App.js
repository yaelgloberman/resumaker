import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import About from "./comps/about";
import Form from "./comps/form";
import Home from "./comps/home";
import AppEmp from "./comps_employee/appEmp";
import Header from "./comps_static/header";
import './App.css';

import Counter from "./redux_comps/counter";
import counterSlice from "./features/counterSlice";
import todosSlice from "./features/todosSlice";
import AppTodo from "./todoRedux_comps/appTodo";
import Resume from "./comps_resume/app_resume";
import Users from "./comps_users/app_users"
import CV from "./cv"
import SignUp from "./signUp"
import Login from "./login"






// הגדרת הסטור הגלובלי שיספוק פרובידר והסלייסים
// של הרידיוסר שהוא מכיל בתוכו

const myStore = configureStore({
  reducer: {
    counterSlice,
    todosSlice
  }
})

function App() {
  return (
    <BrowserRouter>
       <Provider store={myStore}> 
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employee" element={<AppEmp />} />
        <Route path="/employee/:company" element={<AppEmp />} />
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/signUp" element={<SignUp />} />
        {<Route path="/counter" element={<Counter />} /> }
        { <Route path="/todos" element={<AppTodo />} /> }
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/login" element={<Login />} /> 
        {/* כוכבית נשאיר לעמוד 404 אם לא מוצא אף
        ראוט יפעיל את מה שעם פאט' של כוכבית */}
        <Route path="*" element={<h2>Page 404, not found!</h2>} />
      </Routes>
       </Provider> 
    </BrowserRouter>
  );
}

export default App;
