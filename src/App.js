import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./Pages/HomePage/HomeScreen";
import SignUp from "./Pages/FirstPage/SignUp";
import SignIn from "./Pages/SignIn/SingIn";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [tempEmail, setTempEmail] = useState();
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <SignUp TempEmail={tempEmail} SetTempEmail={setTempEmail} />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route
            path="/createAccount"
            element={
              <CreateAccount
                TempEmail={tempEmail}
                SetTempEmail={setTempEmail}
              />
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
