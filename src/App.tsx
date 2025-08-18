import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, SignInPage, SignUpPage } from "./routes";
import { PublicLayouts } from "./layouts/public-layouts";
import SsoCallback from "./routes/sso-callback";
import ProtectedLayout from "./layouts/protected-layouts";
import MainLayout from "./layouts/main-layout";
import { Generate } from "./views/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";


export const App = () => {
  return (
    <Router>
      <Routes>
        {/*Defiine Public Routes*/}
        <Route element={<PublicLayouts />}>
          <Route index element={<Homepage />} />
        </Route>

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in/sso-callback" element={<SsoCallback />} />

        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}


        {/*Define Protected Routes*/}
        <Route element={<ProtectedLayout><MainLayout /></ProtectedLayout>}>
          {/* Nested route for /generate */}
          <Route path="/generate" element={<Generate />}>
            {/* Nested index route for /generate */}
            <Route index element={<Dashboard />} />
            {/* Nested route for /generate/:interviewID */}
            <Route path=":interviewID" element={<CreateEditPage />} />
          </Route>
          {/* Keep the index route for the protected layout if needed for "/" */}
          {/* <Route index element={<Dashboard />} /> */}
          {/* Remove the top-level :interviewID route */}
          {/* <Route path=":interviewID" element={<CreateEditPage />} /> */}
        </Route>

      </Routes>
    </Router>
  );
};