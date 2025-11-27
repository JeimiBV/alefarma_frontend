const BASE_URL = import.meta.env.VITE_API_URL ?? "https://alefarmabackend-production.up.railway.app";

export async function api<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(BASE_URL + endpoint, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
