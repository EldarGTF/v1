function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-brand">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
