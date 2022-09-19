import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProfileInfo from "./Components/Dashboard/ProfileInfo";
import Detail from "./Components/Pages/Detail";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Test from "./Components/Pages/Test";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import RequireAuth from "./Components/Shared/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Test />} />
        <Route path="/details/:_id" element={<Detail />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<ProfileInfo />} />
          <Route path="ACE" element={<idolAce />} />
          <Route path="SFS" element={<idolSfs />} />
          <Route path="trading" element={<idolTrading />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
