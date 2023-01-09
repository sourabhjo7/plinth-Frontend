import "./App.css";
import React from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Aboutus from "./components/About/About";
import Contactus from "./components/ContactUs/Contactus";
import Sidebar from "./components/Sidebar/Sidebar";
import Competitions from "./components/Competitions/Competitions";
import Reg from "./components/Registration/Reg";

import Explore from "./components/Explore/Explore"
import CreateTeam from "./components/CreateTeam/CreateTeam";
import Team from "./components/OurTeam/Team/Team";
import CampusAmb from "./components/CampusAmb/CampusAmb";
import LnmHacks from "./components/LnmHacks/LnmHacks";
import Login from "./components/Login/Login";
import Accomodation from "./components/Accomodation/Accomodation";

import axios from "axios";
console.log(process.env.REACT_APP_API_URL);
const serverSystemUrl= "https://api.plinth.co.in";
function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("false");
  // const getUser = async () => {
  //   try {
  //     const url = `http://localhost:3000/auth/google`;
  //     const { data } = await axios.get(url, { withCredentials: true });
  //     setUser(data.user._json);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err, "hi");
  //   }
  // };

  useEffect(() => { 
    axios
    .get(`${serverSystemUrl}/`, {
      validateStatus: false,
      withCredentials: true,
    })
    .then((response) => {
      console.log("---------", response);
      if (response.status == 200) {
        setAuth(response.data.user.role);
      }
    });
  }, [auth])
  
  useEffect(() => {
    // console.log((user));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // console.log(loading);
  }, []);

  return (
    <div className="App">
        <Router>
          <Sidebar auth = {auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>
          <Routes>
            <Route path="/" element={loading ? (
        <Loader />
      ) :<Home auth={auth} setAuth={setAuth} />} />
            <Route path="aboutus" element={<Aboutus  />} />
            <Route path="ourteam" element={<Team />} />
            <Route path="competitions" element={<Competitions auth={auth} setAuth={setAuth}/>} />
            <Route path="accomodation" element={<Accomodation auth={auth} />} />
            <Route path="/:name" element={<Explore auth={auth} setAuth={setAuth}/>}/>
            {(auth==="false")&&<Route path="/registration" element={<Reg auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>}/>
            }<Route path="campus_ambassador" element={<CampusAmb auth={auth} setAuth={setAuth}/>} />
            <Route path="lnm_hacks" element={<LnmHacks auth={auth} setAuth={setAuth} />} />
            {(auth==="false")&&(<Route path="/login" element={<Login auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>}/>
            )}
            {/* <Route path="create-team" element={<CreateTeam/>} /> */}
          </Routes>

        </Router>
        
      
    </div>
  );
}

export default App;
