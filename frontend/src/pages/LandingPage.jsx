import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const categories = ['Окна', 'Балконы', 'Потолки', 'Освещение'];

function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-brand px-6 py-12 text-white md:px-12">
        <h1 className="max-w-2xl text-3xl font-bold md:text-5xl">Безопасные сделки на ремонт. Оплата только после выполнения.</h1>
        <p className="mt-4 max-w-xl text-blue-100">
          Находите проверенных мастеров в Казахстане и защищайте деньги через безопасную систему эскроу.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/create-order" className="rounded-lg bg-white px-5 py-3 font-medium text-brand">
            Создать заказ
          </Link>
          <Link to="/orders" className="rounded-lg border border-white px-5 py-3 font-medium">
            Найти мастера
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle title="Популярные категории" subtitle="Выберите нужную услугу" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category} className="rounded-xl border bg-white p-5 text-center font-semibold shadow-sm">
              {category}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Как это работает" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Создайте заказ и укажите детали и бюджет.',
            'Мастера отправят предложения и стоимость.',
            'Оплатите безопасно и подтвердите завершение работ.'
          ].map((step, i) => (
            <div key={step} className="rounded-xl border bg-white p-5">
              <p className="text-sm text-slate-500">Шаг {i + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Отзывы клиентов" />
        <div className="grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-xl border bg-white p-5">
            «Нашла надежного мастера по балкону за 2 дня. Оплата действительно безопасная.»
          </blockquote>
          <blockquote className="rounded-xl border bg-white p-5">
            «Понятный процесс и честные отзывы помогли выбрать лучшего исполнителя.»
          </blockquote>
        </div>
      </section>

      <footer className="border-t py-6 text-sm text-slate-500">© 2026 Build Service. Надежный маркетплейс ремонта и монтажа.</footer>
    </div>
  );
}

export default LandingPage;
