const BASE_URL ="http://localhost:8000";

export async function api<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(BASE_URL + endpoint, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
