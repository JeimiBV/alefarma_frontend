import type { LastTrainingResponse } from "../types/Forecast";
import { api } from "./client";

export async function getLastTrainingDate(): Promise<LastTrainingResponse> {
  const res = await api<LastTrainingResponse>("/last_training_date", {
    method: "GET",
  });

  return res;
}
