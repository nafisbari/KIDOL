import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/PrivateRoute/AdminRoute';
import AddProduct from '../DashBoardAdmin/AddProduct/AddProduct';
import MakeAdmin from '../DashBoardAdmin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../DashBoardAdmin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../DashBoardAdmin/ManageProducts/ManageProducts';
import DashBoardHome from '../DashboardHome/DashBoardHome';
import MyOrders from '../DashBoardUser/MyOrders/MyOrders';
import Payment from '../DashBoardUser/Payment/Payment';
import Review from '../DashBoardUser/Review/Review';

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    // const [click, setClick] = useState('dashboard');
    const { user, logout, admin } = useAuth();
    console.log(admin)


    return (
        <div>
            {/* top banner */}
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">My Account</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Dashboard</span>
                    </p>
                </div>
            </div>
            {/* top banner end */}


            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
                    <div>
                        <div className="grid grid-cols-1 border border-colorGray ">
                            <Link className="border-none border-colorGray    p-4 font-fredoka text-colorGray text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}`}>  Dashboard</Link>

                            {
                                !admin ?
                                    <>


                                        <Link className="border border-colorGray border-b-0 border-l-0 border-r-0  p-4 font-fredoka text-colorGray text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/myOrders`}>My Orders</Link>


                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/payment`}> Payment</Link>




                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/review`}> Review</Link>
                                    </>

                                    :

                                    <>
                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/manageAllOrders`}> Manage All Orders</Link>




                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/manageProducts`}> Manage Products</Link>




                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/addProduct`}>  Add Product</Link>




                                        <Link className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" to={`${url}/makeAdmin`}>  Make Admin</Link>

                                    </>
                            }
                            <button className="border border-l-0 border-r-0 border-b-0 border-colorGray p-4 font-fredoka text-colorGray  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" onClick={logout}>
                                <Link to='/'>Logout</Link>
                            </button>
                        </div>


                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="border border-gray-500 p-8">

                            <Switch>
                                <Route exact path={path}>
                                    <DashBoardHome />
                                </Route>
                                <Route path={`${path}/myOrders`}>
                                    <MyOrders />
                                </Route>
                                <Route path={`${path}/payment`}>
                                    <Payment />
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review />
                                </Route>

                                {/* Admin Routes */}
                                <AdminRoute path={`${path}/manageAllOrders`}>
                                    <ManageAllOrders />
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageProducts`}>
                                    <ManageProducts />
                                </AdminRoute>
                                <AdminRoute path={`${path}/addProduct`}>
                                    <AddProduct />
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin />
                                </AdminRoute>
                            </Switch>



                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default DashBoard;