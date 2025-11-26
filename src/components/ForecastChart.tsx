import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PredictResponse } from "../types/Forecast";

export const ForecastChart = ({ forecast }: PredictResponse) => {
  return (
    <div className="w-full h-96">
      {forecast && forecast.length > 0 ? (
        <ResponsiveContainer>
          <LineChart data={forecast}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="ds" tick={{ fontSize: 10 }} />
            <YAxis />

            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="yhat"
              stroke="#63AEAB"
              strokeWidth={2}
              name="Predicción"
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="yhat_lower"
              stroke="#000000"
              name="Ventas mínimas"
              dot={false}
              strokeDasharray="5 5"
            />

            <Line
              type="monotone"
              dataKey="yhat_upper"
              stroke="#000000"
              name="Ventas máximas"
              dot={false}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="py-4 px-4 text-center text-gray-500 italic">
          No hay datos disponibles
        </div>
      )}
    </div>
  );
};
