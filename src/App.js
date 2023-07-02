import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ConfirmEmail from './pages/user/ConfirmEmail';
import UserDetails from './pages/user/UserDetails';
import UpdateInfo from './pages/user/UpdateInfo';
import Login from './pages/user/Login';
import UserSignup from './pages/user/UserSignup';
import Changepassword from './pages/user/Changepassword';
import Home from './components/home/Home';
import SingleDoctor from './pages/doctors/SingleDoctor';
import Header from '../src/pages/shared/Header';
import Footer from '../src/pages/shared/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './pages/loader/Loader';
import PrivateRoute from './components/Privateroute/PrivateRoute';
import PublicRoute from './components/Privateroute/PublicRoute';
import DoctorLis from './pages/DoctorsList/DoctorLis';
import Contact from './components/landingpage/Contact';
import About from './components/landingpage/About';
import MyBooking from './pages/user/appointments/MyBooking';
import Resetpassword from './pages/user/Resetpassword';
import Conversations from './pages/user/conversation/Conversations';
import AdminAppointments from './pages/admin/AdminAppointments';
import AdminDoctors from './pages/admin/AdminDoctors';
import Dashboard from './pages/admin/Dashboard';
import AllUsers from './pages/admin/AllUsers';
import UpdateProfile from './pages/user/UpdateProfile';
import Verify from './pages/user/verify/Verify';
import Nurses from './pages/nurses/Nurses';
import Insurance from './components/insurance/Insurance';
import SingleNurse from './pages/nurses/SingleNurse';
import HireNurse from './pages/user/hiresnurses/HireNurse';
import AllNurses from './pages/admin/AllNurses';
import HiredNurses from './pages/admin/HiredNurses';
import SingleAppointments from './pages/admin/appointment/SingleAppointments';
import CreateDoctor from './pages/doctors/CreateDoctor';
import UpdateDoctor from './pages/doctors/UpdateDoctor';
import ForgotPass from './pages/user/password/ForgotPass';
import CreateNurse from './pages/nurses/CreateNurse';
import UpdateNurses from './pages/nurses/UpdateNurses';
import BookAppointment from './components/doctor/BookAppointment';
import Blood from './components/landingpage/Blood';
import DoctorSignup from './pages/doctor/DoctorSignup';
import DoctorLogin from './pages/doctor/DoctorLogin';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import DoctorForgotPassword from './pages/doctor/DoctorForgotPassword';
import DoctorResetPassword from './pages/doctor/DoctorResetPassword';
import ChangePassword from './pages/doctor/ChangePassword';
import Payment from './pages/payment/Payment';



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
      {loading ? <div>
        <Loader></Loader>
      </div> : <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes >

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/user-signin" element={< Login />}></Route>
            <Route path="/user-signup" element={< UserSignup />}></Route>
            <Route path="/activation/:activation_token"  element={<Verify />} />
            <Route path="/user/password" element={<ForgotPass />}></Route>
            <Route exact path="/password/reset/:token" element={<Resetpassword></Resetpassword>} />
            <Route path="/user/change/password" element={<PrivateRoute><Changepassword /></PrivateRoute>}></Route>
            <Route path="/user/updateinfo" element={<PrivateRoute><UpdateInfo /></PrivateRoute>}></Route>
            <Route path="/user/updateprofile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
            <Route path="/user-info" element={<PrivateRoute>< UserDetails /></PrivateRoute>}></Route>
            <Route path="/user/confirm/email" element={< ConfirmEmail />}></Route>
            <Route path="/doctor/signup" element={< DoctorSignup />}></Route>
            <Route path="/doctor/login" element={< DoctorLogin />}></Route>
            <Route path="/doctor-forgot-password" element={< DoctorForgotPassword />}></Route>
            <Route exact path="/forgot/password/reset/:token" element={<DoctorResetPassword></DoctorResetPassword>} />
            <Route path="/doctor/change/password" element={<PrivateRoute><ChangePassword /></PrivateRoute>}></Route>
            <Route path="/doctor-booking" element={<PrivateRoute><DoctorAppointments /></PrivateRoute>}></Route>
            <Route path="/doctor/:doctorId" element={<SingleDoctor />}></Route>
            <Route path="/doctors" element={<DoctorLis />}></Route>
            <Route path="/book-appointment" element={<PrivateRoute><BookAppointment/></PrivateRoute>}></Route>
            <Route path="/payment/successfull/:tranId" element={<Payment></Payment>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/insurance" element={<Insurance />}></Route>
            <Route path="/nurses" element={<Nurses />}></Route>
            <Route path="/nurse/:nurseId" element={<SingleNurse />}></Route>
            <Route path="/my-booking" element={<PrivateRoute><MyBooking /></PrivateRoute>}></Route>
            <Route path="/my/hire-nurses" element={<PrivateRoute><HireNurse /></PrivateRoute>}></Route>
            <Route path="/chat" element={<PrivateRoute><Conversations /></PrivateRoute>}></Route>
            <Route path="/admin-appointments" element={<PrivateRoute><AdminAppointments /></PrivateRoute>}></Route>
            <Route path="/appointment/:appointmentId" element={<PrivateRoute><SingleAppointments/></PrivateRoute>}></Route>
            <Route path="/admin/all-doctors" element={<PrivateRoute><AdminDoctors /></PrivateRoute>}></Route>
            <Route path="/admin/create-doctor" element={<PrivateRoute><CreateDoctor /></PrivateRoute>}></Route>
            <Route path="/admin/create-nurse" element={<PrivateRoute><CreateNurse /></PrivateRoute>}></Route>
            <Route path="/update-doctor/:doctorId" element={<PrivateRoute><UpdateDoctor /></PrivateRoute>}></Route>
            <Route path="/update-nurse/:nurseId" element={<PrivateRoute><UpdateNurses /></PrivateRoute>}></Route>
            <Route path="/admin/all-nurses" element={<PrivateRoute><AllNurses /></PrivateRoute>}></Route>
            <Route path="/admin/all-hired-nurses" element={<PrivateRoute><HiredNurses /></PrivateRoute>}></Route>
            <Route path="/admin-dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
            <Route path="/admin/alluser" element={<PrivateRoute><AllUsers/></PrivateRoute>}></Route>
            <Route path="/bloods" element={<Blood></Blood>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </div>}
    </div>

  );
}
export default App;
