import { useState } from "react";
import { useForm } from "react-hook-form";
import ForecastTable from "../components/ForecastTable";
import type { PredictResponse } from "../types/Forecast";
import { predictSales } from "../api/forecast.service";
import { ForecastChart } from "../components/ForecastChart";

type FormValues = {
  days?: number;
  start?: string;
  end?: string;
};

export default function Forecast() {
  const [mode, setMode] = useState<"day" | "range">("day");
  const [forecast, setForecast] = useState<PredictResponse | undefined>(
    undefined
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      let url = "";
      let payload;

      if (mode === "day") {
        url = "/forecast";
        payload = { days: Number(values.days) };
      } else {
        url = "/forecast/range";
        payload = { start: values.start!, end: values.end! };
      }

      const data = await predictSales(url, payload);
      setForecast(data);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  const handleModeChange = (newMode: "day" | "range") => {
    setMode(newMode);
    reset();
  };

  return (
    <div className="rounded-xl text-gray-900 p-8 space-y-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10">Predicción de Ventas</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-xl bg-white shadow-md space-y-6"
      >
        <label className="font-semibold">Tipo de consulta</label>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 items-center p-6">
          <div className="flex items-end gap-4 w-1/2">
            <select
              className="p-3 rounded-lg border bg-gray-700 text-white font-semibold w-1/3"
              value={mode}
              onChange={(e) =>
                handleModeChange(e.target.value as "day" | "range")
              }
            >
              <option value="day">Por día</option>
              <option value="range">Por rango de fechas</option>
            </select>

            {mode === "day" ? (
              <div className="relative w-2/3 flex flex-col">
                <input
                  type="number"
                  placeholder="Cantidad de días a predecir"
                  min={1}
                  className={`p-3 rounded-lg bg-[#63AEAB]/40 text-gray-700 font-semibold w-full
                    ${errors.days ? "border border-red-500" : ""}`}
                  {...register("days", {
                    required: "Debes ingresar la cantidad de días.",
                    min: { value: 1, message: "Debe ser mayor a 0." },
                  })}
                />

                {errors.days && (
                  <p className="absolute text-red-600 text-sm font-semibold -bottom-5 left-0">
                    {errors.days.message}
                  </p>
                )}
              </div>
            ) : (
              <div className="relative w-2/3 flex flex-col">
                <div className="flex items-center gap-4">
                  <input
                    type="date"
                    className={`p-3 rounded-lg bg-[#63AEAB]/40 text-gray-700 font-semibold w-1/2
                      ${errors.start ? "border border-red-500" : ""}`}
                    {...register("start", {
                      required: "Debes seleccionar una fecha inicial.",
                    })}
                  />
                  {(errors.start || errors.end) && (
                    <p className="absolute text-red-600 text-sm font-semibold -bottom-5 left-0">
                      {errors.start?.message || errors.end?.message}
                    </p>
                  )}

                  <input
                    type="date"
                    className={`p-3 rounded-lg bg-[#63AEAB]/40 text-gray-700 font-semibold w-1/2
                      ${errors.end ? "border border-red-500" : ""}`}
                    {...register("end", {
                      required: "Debes seleccionar una fecha final.",
                      validate: (value) => {
                        const start = getValues("start");
                        if (!value || !start) return true;
                        return (
                          new Date(value) >= new Date(start) ||
                          "La fecha final no puede ser menor a la inicial."
                        );
                      },
                    })}
                  />
                </div>

                {errors.end && (
                  <p className="absolute text-red-600 text-sm font-semibold -bottom-5 left-0">
                    {errors.start?.message || errors.end?.message}
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="font-semibold py-2.5 rounded-md text-white w-1/2 hover:bg-[#7abab8] hover:cursor-pointer transition-colors bg-[#63AEAB]"
          >
            Generar Predicción
          </button>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Gráfico</h2>
          <div className="h-96 rounded-xl flex items-center justify-center text-gray-700 bg-white shadow-md overflow-hidden p-4">
            <ForecastChart forecast={forecast?.forecast || []} />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">Resultados</h2>
          <div className="h-96 overflow-y-auto overflow-x-auto rounded-xl shadow-md bg-gray-50">
            <ForecastTable forecast={forecast} />
          </div>
        </div>
      </div>
    </div>
  );
}
