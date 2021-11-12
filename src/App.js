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
import AllToys from './Pages/Toys/AllToys/AllToys';
import ToyDetails from './Pages/Toys/ToyDetails/ToyDetails';
import Order from './Pages/Toys/Order/Order';
import NotFound from './Pages/NotFound/NotFound'



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
            <Route path='/allToys'>
              <AllToys />
            </Route>
            <Route path='/toyDetails/:toyId'>
              <ToyDetails />
            </Route>
            <Route path='/order/:orderId'>
              <Order />
            </Route>
            <PrivateRoute path='/contact'>
              <Contact />
            </PrivateRoute>
            <Route path='/dashboard'>
              <DashBoard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
