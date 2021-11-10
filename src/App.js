import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider/AuthProvider';
import MyAccount from './Pages/Login/MyAccount/MyAccount';
import DashBoard from './Pages/DashBoard/DashBoard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact/Contact';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/myAccount'>
              <MyAccount />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <PrivateRoute path='/dashoard'>
              <DashBoard />
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
