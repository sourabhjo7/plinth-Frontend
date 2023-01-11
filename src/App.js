import "./App.css";
import React,{lazy,Suspense} from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import axios from "axios";
// import CreateTeam from "./components/CreateTeam/CreateTeam";
import Payment from "./components/Payments/Payment";

const Aboutus = lazy(()=>import("./components/About/About"));
const Admin = lazy(()=>import("./components/Admin/Admin"));
const Komet = lazy(()=>import("./components/Komet/Komet"));
const Sidebar = lazy(()=>import("./components/Sidebar/Sidebar"));
const Competitions = lazy(()=>import("./components/Competitions/Competitions"));
const Reg = lazy(()=>import("./components/Registration/Reg"));
const Explore = lazy(()=>import("./components/Explore/Explore"));
const Team = lazy(()=>import("./components/OurTeam/Team/Team"));
const CampusAmb = lazy(()=>import("./components/CampusAmb/CampusAmb"));
const LnmHacks = lazy(()=>import("./components/LnmHacks/LnmHacks"));
const Login = lazy(()=>import("./components/Login/Login"));
const Accomodation = lazy(()=>import("./components/Accomodation/Accomodation"));


console.log(process.env.REACT_APP_API_URL);
const serverSystemUrl="https://api.plinth.co.in";
function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("false");
  const [userId,setUserId]=useState(null)
  const [accomodation,setAccomodation]=useState(false)
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
        setUserId(response.data.user.user_id)
        setAccomodation(response.data.user.accomodation)
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

  console.log(auth);

  return (
    <div className="App">
        <Router>
          <Sidebar auth = {auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>

          <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={loading ? (
        <Loader />
      ) :<Home auth={auth} setAuth={setAuth} />} />
            <Route path="aboutus" element={<Aboutus  />} />
            <Route path="ourteam" element={<Team />} />
            <Route path="/admin" element={(auth==="admin") && (<Admin serverSystemUrl={serverSystemUrl}/>)} />
            <Route path="komet" element={<Komet />} />
            <Route path="competitions" element={<Competitions auth={auth} setAuth={setAuth}/>} />
            <Route path="accomodation" element={<Accomodation auth={auth} />} />
            <Route path="/:name/:id" element={<Explore auth={auth} setAuth={setAuth}/>}/>
            {(auth==="false")&&<Route path="/registration" element={<Reg auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>}/>
            }<Route path="campus_ambassador" element={<CampusAmb auth={auth} setAuth={setAuth}/>} />
            <Route path="lnm_hacks" element={<LnmHacks auth={auth} setAuth={setAuth} />} />
            {(auth==="false")&&(<Route path="/login" element={<Login auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}/>}/>
            )}
            <Route path="/payments/:eventname/:id"  element={<Payment userid={userId} accomodation={accomodation}/>} />
            {/* <Route path="create-team" element={<CreateTeam/>} /> */}
          </Routes>
          </Suspense>

        </Router>
        
      
    </div>
  );
}

export default App;
