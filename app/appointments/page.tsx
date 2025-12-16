"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Card } from "../../components/Card";
import DataTable from "../../components/DataTable";
import FilterBar from "../../components/FilterBar";
import { getAppointments, type Appointment } from "../../lib/api";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [provider, setProvider] = useState("All providers");
  const [status, setStatus] = useState("All statuses");

  const controlClass =
    "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200";

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        setHasError(false);

        const data = await getAppointments({ provider, status });
        if (!cancelled) setAppointments(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setHasError(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [provider, status]);

  return (
    <main className="min-h-screen p-8">
      <PageHeader
        title="Appointments"
        subtitle="Review upcoming and completed appointments. Filter by provider and visit status."
      />

      <FilterBar
        right={
          <button className="rounded-md border border-gray-300 px-3 py-2 text-sm">
            Export CSV
          </button>
        }
      >
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className={controlClass}
        >
          <option>All providers</option>
          <option>Dr. Smith</option>
          <option>Dr. Jones</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={controlClass}
        >
          <option>All statuses</option>
          <option>Pending check-in</option>
          <option>Completed</option>
          <option>No-show</option>
        </select>
      </FilterBar>

      {hasError ? (
        <Card className="p-4">
          <p className="text-sm font-semibold text-gray-900">
            Unable to load appointments
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Please refresh the page or try again later.
          </p>
        </Card>
      ) : isLoading ? (
        <Card className="p-4">
          <p className="text-sm text-gray-600">Loading appointments…</p>
        </Card>
      ) : appointments.length === 0 ? (
        <Card className="p-4">
          <p className="text-sm text-gray-600">
            No appointments match the selected filters.
          </p>
        </Card>
      ) : (
        <DataTable title="Appointments list">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                <th className="px-3 py-2">Time</th>
                <th className="px-3 py-2">Patient</th>
                <th className="px-3 py-2">Provider</th>
                <th className="px-3 py-2">Visit type</th>
                <th className="px-3 py-2">Payer</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr
                  key={appt.id}
                  className={index % 2 === 0 ? "border-b" : "border-b bg-gray-50"}
                >
                  <td className="px-3 py-2">{appt.time}</td>
                  <td className="px-3 py-2">{appt.patient}</td>
                  <td className="px-3 py-2">{appt.provider}</td>
                  <td className="px-3 py-2">{appt.visitType}</td>
                  <td className="px-3 py-2">{appt.payer}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        appt.status.toLowerCase().includes("no-show")
                          ? "bg-red-50 text-red-700 ring-red-200"
                          : appt.status.toLowerCase().includes("completed")
                          ? "bg-green-50 text-green-700 ring-green-200"
                          : "bg-gray-50 text-gray-700 ring-gray-200"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DataTable>
      )}
    </main>
  );
}