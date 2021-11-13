import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider/AuthProvider';
import MyAccount from './Pages/Login/MyAccount/MyAccount';
import DashBoard from './Pages/DashBoard/Dashboard/DashBoard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact/Contact';
import AllToys from './Pages/Toys/AllToys/AllToys';
import ToyDetails from './Pages/Toys/ToyDetails/ToyDetails';
import Order from './Pages/Toys/Order/Order';
import NotFound from './Pages/NotFound/NotFound'
import ReviewsAll from './Pages/Home/Review/ReviewsAll';




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
            <PrivateRoute path='/allToys'>
              <AllToys />
            </PrivateRoute>
            <PrivateRoute path='/allToys'>
              <ReviewsAll />
            </PrivateRoute>
            <PrivateRoute path='/toyDetails/:toyId'>
              <ToyDetails />
            </PrivateRoute>
            <PrivateRoute path='/order/:orderId'>
              <Order />
            </PrivateRoute>

            <Route path='/contact'>
              <Contact />
            </Route>
            <PrivateRoute path='/dashboard'>
              <DashBoard />
            </PrivateRoute>
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
