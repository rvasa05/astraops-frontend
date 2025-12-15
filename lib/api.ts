export type Kpi = {
  label: string;
  value: string;
  helper?: string;
};

export type Appointment = {
  id: number;
  patient: string;
  provider: string;
  date: string;
  time: string;
  status: string;
  payer: string;
  visitType: string;
};

type ApiListResponse<T> = {
  data: T[];
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request failed (${res.status}) ${url} ${text}`);
  }

  return res.json() as Promise<T>;
}

/**
 * KPIs
 */
export async function getKpis(): Promise<Kpi[]> {
  const json = await fetchJson<ApiListResponse<Kpi>>("/api/kpis");
  return json.data ?? [];
}

/**
 * Appointments
 */
export async function getAppointments(params?: {
  provider?: string;
  status?: string;
}): Promise<Appointment[]> {
  const search = new URLSearchParams();

  if (params?.provider && params.provider !== "All providers") {
    search.set("provider", params.provider);
  }
  if (params?.status && params.status !== "All statuses") {
    search.set("status", params.status);
  }

  const qs = search.toString();
  const url = qs ? `/api/appointments?${qs}` : "/api/appointments";

  const json = await fetchJson<ApiListResponse<Appointment>>(url);
  return json.data ?? [];
}
