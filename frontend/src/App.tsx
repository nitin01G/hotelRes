import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { HotelDetailsPage } from './pages/HotelDetailsPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { PaymentPage } from './pages/PaymentPage';
import { PaymentStatusPage } from './pages/PaymentStatusPage';
import { ReservationManagementPage } from './pages/ReservationManagementPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col justify-between bg-brand-50">
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/hotels/:id" element={<HotelDetailsPage />} />
                <Route path="/reservation/confirm" element={<ConfirmationPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/payment/status" element={<PaymentStatusPage />} />
                <Route path="/reservations" element={<ReservationManagementPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
