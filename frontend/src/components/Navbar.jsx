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
          <Link to="/create-order">Создать заказ</Link>
          <Link to="/orders">Заказы</Link>
          <Link to="/dashboard/client">Кабинет клиента</Link>
          <Link to="/dashboard/installer">Кабинет мастера</Link>
          <select
            className="rounded border px-2 py-1"
            value={user.role}
            onChange={(e) => switchRole(e.target.value)}
          >
            <option value="client">Клиент</option>
            <option value="installer">Мастер</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
