import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Error404 from "./components/Error404/Error404";
import Explore from "./components/Explore/Explore";
import Home from './components/Home/Home';
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Resgister from "./components/Resgister/Resgister";
import SingleOrder from "./components/SingleOrder/SingleOrder";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <div className="App">
          <AuthProvider>
          <Router>
            
             <Switch>
             <Route exact path="/">
                <Home />
              </Route>
              <Route  path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/register">
                <Resgister />
              </Route>
              <Route  path="/dashboard">
                <DashBoard></DashBoard>
              </Route>
              <Route  path="/explore">
                <Explore></Explore>
              </Route>
              <PrivateRoute path="/singleOrder/:serviceId">
                <SingleOrder></SingleOrder>
               </PrivateRoute>
              <Route exact path="*">
                <Error404></Error404>
              </Route>
             </Switch>
           </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
