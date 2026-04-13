import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CreateOrderPage from './pages/CreateOrderPage';
import OrdersPage from './pages/OrdersPage';
import InstallerProfilePage from './pages/InstallerProfilePage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import InstallerDashboardPage from './pages/InstallerDashboardPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-order" element={<CreateOrderPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/installer/:id" element={<InstallerProfilePage />} />
          <Route path="/dashboard/client" element={<ClientDashboardPage />} />
          <Route path="/dashboard/installer" element={<InstallerDashboardPage />} />
          <Route path="/payment/:orderId" element={<PaymentPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
