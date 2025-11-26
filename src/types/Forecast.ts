export interface PredictByDaysRequest {
  days: number;
}

export interface PredictByRangeRequest {
  start: string;
  end: string;
}


export interface PredictionItem {
  ds: string;
  yhat: number;
  yhat_lower: number;
  yhat_upper: number;
}

export interface PredictResponse {
  forecast: PredictionItem[];
}
