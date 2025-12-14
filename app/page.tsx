import PageHeader from "../components/PageHeader";
import KpiCard from "../components/KpiCard";
import { Card } from "../components/Card";

export default function Home() {
  // Simulated states (later replaced with real API calls)
  const isLoading = false;
  const hasError = false;

  const kpis = [
    {
      label: "No-show rate (last 30 days)",
      value: "8.2%",
      helper:
        "Target is under 5%. High no-show rates often indicate reminder or scheduling issues.",
    },
    {
      label: "Claim denial rate (last 30 days)",
      value: "4.7%",
      helper:
        "Target is under 3–4%. Denials typically signal coding or eligibility problems.",
    },
    {
      label: "Collected revenue (last 30 days)",
      value: "$186,420",
      helper:
        "Total payments received from payers and patients in the last 30 days.",
    },
  ];

  const upcomingAppointments = [
    {
      time: "9:00 AM",
      patient: "Alice Patel",
      provider: "Dr. Smith",
      visitType: "Follow-up",
      status: "Scheduled",
    },
    {
      time: "9:30 AM",
      patient: "Michael Chen",
      provider: "Dr. Jones",
      visitType: "New patient",
      status: "Checked in",
    },
    {
      time: "10:15 AM",
      patient: "Sara Lopez",
      provider: "Dr. Smith",
      visitType: "Follow-up",
      status: "High no-show risk",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <PageHeader
        title="AstraOps Dashboard"
        subtitle="At-a-glance view of practice performance, operational risk, and today’s schedule."
      />

      {hasError ? (
        <Card className="p-4">
          <p className="text-sm font-semibold text-gray-900">
            Unable to load dashboard
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Please refresh the page or try again later.
          </p>
        </Card>
      ) : isLoading ? (
        <Card className="p-4">
          <p className="text-sm text-gray-600">Loading dashboard…</p>
        </Card>
      ) : (
        <>
          {/* KPI SECTION */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">
              Practice snapshot (last 30 days)
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {kpis.map((kpi) => (
                <KpiCard
                  key={kpi.label}
                  label={kpi.label}
                  value={kpi.value}
                  helper={kpi.helper}
                />
              ))}
            </div>
          </section>

          {/* UPCOMING APPOINTMENTS */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">
              Upcoming appointments today
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              This is a preview of today’s schedule. In the live product, this
              data comes directly from the practice management system.
            </p>

            {upcomingAppointments.length === 0 ? (
              <p className="text-sm text-gray-500">
                No upcoming appointments found for today.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <th className="px-3 py-2">Time</th>
                      <th className="px-3 py-2">Patient</th>
                      <th className="px-3 py-2">Provider</th>
                      <th className="px-3 py-2">Visit type</th>
                      <th className="px-3 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingAppointments.map((appt, index) => (
                      <tr
                        key={`${appt.time}-${appt.patient}`}
                        className={
                          index % 2 === 0 ? "border-b" : "border-b bg-gray-50"
                        }
                      >
                        <td className="px-3 py-2">{appt.time}</td>
                        <td className="px-3 py-2">{appt.patient}</td>
                        <td className="px-3 py-2">{appt.provider}</td>
                        <td className="px-3 py-2">{appt.visitType}</td>
                        <td className="px-3 py-2">
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                            {appt.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
