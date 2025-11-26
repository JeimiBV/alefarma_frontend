function FeatureCard({ title, text, banner }: { title: string; text: string; banner: string }) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition-shadow">
        <img src={banner} alt={`${title} icon`} className="mb-4 rounded-2xl w-full h-48 object-cover shadow-lg" />
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}

export default FeatureCard;