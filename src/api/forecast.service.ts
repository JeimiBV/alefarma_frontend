import type { PredictByDaysRequest, PredictByRangeRequest, PredictResponse } from "../types/Forecast";
import { api } from "./client";

export async function predictSales(
  url: string,
  data: PredictByDaysRequest | PredictByRangeRequest
): Promise<PredictResponse> {
  const res = await api<PredictResponse>(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res;
}

