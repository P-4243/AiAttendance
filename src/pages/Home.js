
import {
    BrowserRouter as Router, Routes,
    Route
  } from "react-router-dom";
  import AdminLogIn from "./pages/AdminLogIn";
  import CenterLogIn from "./CenterLogIn";
  import GovernmentLogIn from "./GovernmentLogIn";
import MyButton from "../components/MyButton";

const Home = ({ to }) => {

    return (
        <div>
        <Router>
              <MyButton to="CenterLogIn" />
              <MyButton to="GovernmentLogIn" />
              <MyButton to="AdminLogIn" />
              <Routes>
                  <Route path="/CenterLogIn" element={<CenterLogIn />} />
                  <Route path="/GovernmentLogIn"
                      element={<GovernmentLogIn />} />
                  <Route path="/AdminLogIn"
                      element={<AdminLogIn />} />
              </Routes>
          </Router>
          </div>
    )
}

export default Home;
