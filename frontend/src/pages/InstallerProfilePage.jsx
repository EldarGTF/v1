import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

function InstallerProfilePage() {
  const { id } = useParams();

  return (
    <section className="space-y-6 rounded-xl border bg-white p-6">
      <SectionTitle title={`Мастер #${id}`} subtitle="Проверенный профиль специалиста" />
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-slate-200" />
        <div>
          <p className="font-semibold">Нурсултан Монтаж Про</p>
          <p className="text-sm text-slate-600">Рейтинг: 4.9 (128 отзывов)</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Портфолио</h3>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-20 rounded bg-slate-100" />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Последние отзывы</h3>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-700">
          <li>«Приехал вовремя и сделал аккуратно.»</li>
          <li>«Отличная коммуникация и честная смета.»</li>
        </ul>
      </div>
      <button className="rounded-lg bg-brand px-4 py-3 text-white">Выбрать мастера</button>
    </section>
  );
}

export default InstallerProfilePage;
