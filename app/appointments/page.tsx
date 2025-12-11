"use client";

import { useState } from "react";

const sampleAppointments = [
  {
    id: 1,
    patient: "Alice Patel",
    provider: "Dr. Smith",
    date: "2025-01-10",
    time: "09:00 AM",
    status: "Pending check-in",
    payer: "Aetna",
    visitType: "Follow-up",
  },
  {
    id: 2,
    patient: "Michael Chen",
    provider: "Dr. Jones",
    date: "2025-01-10",
    time: "09:30 AM",
    status: "Completed",
    payer: "BCBS",
    visitType: "New patient",
  },
  {
    id: 3,
    patient: "Sara Lopez",
    provider: "Dr. Smith",
    date: "2025-01-10",
    time: "10:15 AM",
    status: "No-show",
    payer: "Self-pay",
    visitType: "Follow-up",
  },
  {
    id: 4,
    patient: "John Doe",
    provider: "Dr. Lee",
    date: "2025-01-10",
    time: "11:00 AM",
    status: "Completed",
    payer: "UnitedHealthcare",
    visitType: "Physical",
  },
];

const providers = ["All providers", "Dr. Smith", "Dr. Jones", "Dr. Lee"];
const statuses = ["All statuses", "Completed", "No-show", "Pending check-in"];

export default function AppointmentsPage() {
  const [selectedProvider, setSelectedProvider] = useState("All providers");
  const [selectedStatus, setSelectedStatus] = useState("All statuses");

  const filteredAppointments = sampleAppointments.filter((appt) => {
    const matchesProvider =
      selectedProvider === "All providers" ||
      appt.provider === selectedProvider;

    const matchesStatus =
      selectedStatus === "All statuses" || appt.status === selectedStatus;

    return matchesProvider && matchesStatus;
  });

  return (
    <main className="min-h-screen p-8">
      {/* Page header */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Today&apos;s schedule
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          View today&apos;s appointments by provider, status, and payer. In the
          full product, this screen helps front-desk staff quickly see who&apos;s
          late, who no-showed, and where there are gaps in the schedule.
        </p>
      </header>

      {/* Context row */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
        <div className="text-gray-500">
          Practice:{" "}
          <span className="font-medium">Demo Family Medicine (sample)</span>
        </div>
        <div className="text-gray-500">
          Date: <span className="font-medium">Jan 10, 2025</span>
        </div>
      </div>

      {/* Filters */}
      <section className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold mb-3 text-gray-700">
          Filters (front-end demo only)
        </h2>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6 text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="text-gray-600 md:w-28">Provider</label>
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
            >
              {providers.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <label className="text-gray-600 md:w-28">Status</label>
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          In a live environment, these filters would be applied to real-time
          appointment data from the practice&apos;s scheduling system.
        </p>
      </section>

      {/* Table */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm overflow-x-auto">
        <h2 className="text-sm font-semibold mb-3 text-gray-700">
          Appointment list
        </h2>
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
            {filteredAppointments.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-3 py-4 text-center text-gray-400"
                >
                  No appointments match the current filters.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appt, index) => (
                <tr
                  key={appt.id}
                  className={
                    index % 2 === 0 ? "border-b" : "border-b bg-gray-50"
                  }
                >
                  <td className="px-3 py-2">{appt.time}</td>
                  <td className="px-3 py-2">{appt.patient}</td>
                  <td className="px-3 py-2">{appt.provider}</td>
                  <td className="px-3 py-2">{appt.visitType}</td>
                  <td className="px-3 py-2">{appt.payer}</td>
                  <td className="px-3 py-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}

