import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, switchRole } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-brand">
          Build Service
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/create-order">Create Order</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/dashboard/client">Client Dashboard</Link>
          <Link to="/dashboard/installer">Installer Dashboard</Link>
          <select
            className="rounded border px-2 py-1"
            value={user.role}
            onChange={(e) => switchRole(e.target.value)}
          >
            <option value="client">Client</option>
            <option value="installer">Installer</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
