import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

import Langauge from "./components/Langauge";


import Dashboard from "./pages/home/Dashboard";
import Notice from "./pages/home/Notice";
import Faq from "./pages/home/Faq";
import TradingChart from "./pages/home/TradingChart";
import Smartrade from "./pages/home/Smartrade";


import Deposit from "./pages/invest/Deposit";
import History from "./pages/invest/History";

import WithdrawReq from "./pages/Withdraw/WithdrawReq";
import Assets from "./pages/assets/Assets";
import Transaction from "./pages/Withdraw/Transaction";
import Whistory from "./pages/Withdraw/Whistory";
import AddWallet from "./pages/Withdraw/AddWallet";
import AddWalletAddress from "./pages/Withdraw/AddWalletAddress";

import Server from "./pages/server/Server";

import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/profile/ChangePassword";
import PaymentPassword from "./pages/profile/PaymentPassword";
import Earn from "./pages/incomes/Earn";
import Vip from "./pages/team/Vip";
import Refer from "./pages/profile/Refer";
import Kyc from "./pages/profile/Kyc";
import Team from "./pages/team/Team";
import GenerationData from "./pages/team/GenerationData";

import Level from "./pages/profile/Level";
import Setting from "./pages/profile/Setting";
import RechargeCurrency from "./pages/assets/SelectRechargeCourency";
import SubmitRecharge from "./pages/assets/SubmitRecharge";
import BillRecord from "./pages/assets/BillRecord";
import BindEmail from "./pages/profile/BindEmail";

import Trade from "./pages/team/Trade";
import Commission from "./pages/profile/Commission";

// import Footer from "./components/Footer";

import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute, PublicRoute } from './Helper/helper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';     
import Mining from "./pages/invest/Mining";
import SubmitWithdraw from "./pages/assets/SubmitWithdraw";
import SelectRechargeCourency from "./pages/assets/SelectWithdrawCurrency";
import About from "./pages/profile/About";
import PledgeRecord from './pages/assets/PledgeRecord';
import ReleasedRecord from "./pages/assets/ReleasedRecord";
import Task from "./pages/incomes/Task";
import CashCarousel from "./pages/incomes/CashCarousel";
import RewardDetail from "./pages/incomes/RewardDetails";
import Info from "./pages/profile/Info";
import BindAddress from "./pages/profile/BindAddress";
import P2P from "./pages/home/P2P";
import ExchangeRecord from "./pages/team/ExchangeRecord";
import WithdrawRecord from "./pages/assets/WithdrawRecord";
import DepositRecord from "./pages/assets/DepositRecord";


function AppContent() {
    // const location = useLocation();
    // const hiddenFooterRoutes = [
    //     "/",                // Login default
    //     "/login",
    //     "/register",
    //     "/team",
    //     "/deposit-history",
    //     "/withdraw-history",
    //     "/withdraw-req",
    //     "/Smartrade",
    //     "/profile",
    //     "/deposit",
    //     "/add-walletAddress",
    //     "/add-wallet",
    //     "/forgot-password",
    //     "/change-password",
    //     "/notice",
    //     "/server-commission",
    //     "/refer",
    //     "/kyc",
    //     "/wallet",
    //     "/langauge",
    //     "/faq",
    //     "/setting",
    //     "/level"
    //     // "/transaction"
    // ];

    // // Check if current path matches any of the above OR dynamic TradingChart route
    // const hideFooter =
    // hiddenFooterRoutes.includes(location.pathname) ||
    // location.pathname.startsWith("/add-walletAddress") ||
    // location.pathname.startsWith("/dashboard/TradingChart");

    return (
        <div data-v-72d7289a="" >
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
                <Route path="/langauge" element={<Langauge />} />

                {/* Protected Routes */}
                <Route path="/commission" element={<Commission />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
                <Route path="/faq" element={<ProtectedRoute><Faq /></ProtectedRoute>} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/pledge-record" element={<PledgeRecord />} />
                <Route path="/released-record" element={<ReleasedRecord />} />
                <Route path="/task" element={<Task />} />
                <Route path="/info" element={<Info />} />
                <Route path="/bind-address" element={<BindAddress />} />
                <Route path="/exchange-record" element={<ExchangeRecord />} />

                <Route path="/transaction" element={<ProtectedRoute><Transaction /></ProtectedRoute>} />
                <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
                <Route path="/mining" element={<Mining />} />
                <Route path="/refer" element={<Refer />} />
                <Route path="/Kyc" element={<ProtectedRoute><Kyc /></ProtectedRoute>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/vip" element={<Vip />} />
                <Route path="/about" element={<About />} />
                <Route path="/submit-withdraw" element={<SubmitWithdraw />} />

                <Route path="/payment-password" element={<ProtectedRoute><PaymentPassword /></ProtectedRoute>} />
                <Route path="/level" element={<ProtectedRoute><Level /></ProtectedRoute>} />
                <Route path="/team" element={<Team />} />
                <Route path="/recharge-currency" element={<RechargeCurrency />} />
                <Route path="/withdraw-currency" element={<SelectRechargeCourency />} />
                <Route path="/submit-recharge" element={<SubmitRecharge />} />
                <Route path="/bill-record" element={<BillRecord />} />
                <Route path="/withdraw-record" element={<WithdrawRecord />} />
                <Route path="/deposit-record" element={<DepositRecord />} />
                <Route path="/bind-email" element={<BindEmail />} />
                <Route path="/cash-carousel" element={<CashCarousel />} />
                <Route path="/reward-details" element={<RewardDetail />} />
                <Route path="/P2P" element={<P2P />} />
                <Route path="/GenerationData" element={<GenerationData />} />

                <Route path="/withdraw-req" element={<ProtectedRoute><WithdrawReq /></ProtectedRoute>} />
                <Route path="/deposit-history" element={<ProtectedRoute><History /></ProtectedRoute>} />
                <Route path="/withdraw-history" element={<ProtectedRoute><Whistory /></ProtectedRoute>} />
                <Route path="/smartrade" element={<ProtectedRoute><Smartrade /></ProtectedRoute>} />
                <Route path="/deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
                <Route path="/dashboard/TradingChart/:symbol" element={<ProtectedRoute><TradingChart /></ProtectedRoute>} />
                <Route path="/add-wallet" element={<ProtectedRoute><AddWallet /></ProtectedRoute>} />
                <Route path="/add-walletAddress/:networkType" element={<ProtectedRoute><AddWalletAddress /></ProtectedRoute>} />
            </Routes>

            {/* Footer only if route not in hidden list */}
            {/* {!hideFooter && <Footer />} */}
            <ToastContainer />
        </div>

    );
}

function App() {
    return (
        <AuthProvider>

            <AppContent />

        </AuthProvider>
    );
}

export default App;
