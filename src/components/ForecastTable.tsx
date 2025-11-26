import type { PredictionItem, PredictResponse } from "../types/Forecast";

interface ForecastTableProps {
  forecast?: PredictResponse;
}

export default function ForecastTable({ forecast }: ForecastTableProps) {
  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day); // JS: mes empieza en 0
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatNumber = (num: number) => num.toFixed(2);

  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-auto h-full">
      <div className="overflow-x-auto rounded-xl h-full">
        <table className="min-w-full border border-gray-200 rounded-lg h-full">
          <thead className="bg-[#63AEAB]">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                Fecha
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                Predicción de ventas
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                Ventas mínimas
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-white">
                Ventas máximas
              </th>
            </tr>
          </thead>
          <tbody>
            {forecast?.forecast && forecast.forecast.length > 0 ? (
              forecast.forecast.map((item: PredictionItem) => (
                <tr
                  key={item.ds}
                  className="bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {formatDate(item.ds)}
                  </td>

                  <td className="py-3 px-4 text-sm text-gray-700">
                    Bs. {formatNumber(item.yhat)}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {formatNumber(item.yhat_lower)}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {formatNumber(item.yhat_upper)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="py-4 px-4 text-center text-gray-500 italic"
                >
                  No hay datos de predicción disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
