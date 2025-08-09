import {BrowserRouter as  Router, Routes, Route} from "react-router";
import { Homepage, SignInPage, SignUpPage } from "./routes";

export const App = () => {
  return (
    <Router>
      <Routes>
      {/*Defiine Public Routes*/}
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

      {/*Define Protected Routes*/}

      </Routes>
    </Router>  
  );
};