import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="bg-gray-100 rounded-3xl shadow-md p-8 lg:p-14 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <span className="text-sm font-medium text-white bg-[#63AEAB] px-3 py-1 rounded-full w-fit">
            Bienvenido a AleFarma
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Sistema de Predicción de Ventas
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Visualiza y predice ventas diarias mediante un modelo Prophet.
            Optimiza inventarios, anticipa la venta y toma decisiones basadas en
            datos reales de la farmacia.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/forecast"
              className="bg-[#63AEAB] hover:bg-[#39747D] transition-colors text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              Ver Predicción
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 text-[#63AEAB] font-semibold hover:text-[#39747D] transition-colors"
            >
              Acerca del Proyecto →
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full">
            <img
              src="banner.png"
              alt="Ilustración de predicción de ventas"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-100 rounded-xl p-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          ¿Qué ofrece este sistema?
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Un panel inteligente para visualizar, analizar y anticipar el
          comportamiento de ventas.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard
            title="Predicción de Ventas Diarias"
            text="Obtén estimaciones precisas de las ventas futuras con Prophet, generadas día por día para una mejor planificación."
            banner="graph1.png"
          />

          <FeatureCard
            title="Análisis y Tendencias"
            text="Visualiza gráficos de comportamiento histórico y detecta patrones estacionales o picos de demanda."
            banner="graph2.png"
          />

          <FeatureCard
            title="Proyección por Rango de Fechas"
            text="Genera pronósticos personalizados según el rango de fechas que selecciones para mejorar tus decisiones."
            banner="graph3.png"
          />
        </div>
      </section>
    </div>
  );
}
