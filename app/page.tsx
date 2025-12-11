export default function Home() {
  const kpis = [
    {
      label: "No-show rate (last 30 days)",
      value: "8.2%",
      helper: "Target: under 5%. High no-show rate usually means reminder or scheduling issues.",
    },
    {
      label: "Claim denial rate (last 30 days)",
      value: "4.7%",
      helper: "Target: under 3–4%. Denials often point to coding or eligibility problems.",
    },
    {
      label: "Collected revenue (last 30 days)",
      value: "$186,420",
      helper: "Total payments received from payers and patients in the last 30 days.",
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
      status: "No-show risk (high)",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      {/* Page header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          AstraOps Dashboard
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          At-a-glance view of how the practice is performing: no-shows, denials,
          and revenue for the last 30 days, plus today&apos;s schedule activity.
        </p>
      </header>

      {/* KPI row */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-3">
          Practice snapshot (last 30 days)
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                {kpi.label}
              </p>
              <p className="mt-3 text-2xl font-semibold">{kpi.value}</p>
              <p className="mt-2 text-xs text-gray-500 leading-snug">
                {kpi.helper}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Today’s appointments snapshot */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h2 className="text-lg font-semibold">
              Upcoming appointments today
            </h2>
            <p className="text-gray-500 text-sm">
              Example view of this morning&apos;s schedule. In the live product,
              this pulls directly from the practice management system.
            </p>
          </div>
          <p className="text-xs text-gray-500">
            Location: Demo Family Medicine · Date: Jan 10, 2025 (sample data)
          </p>
        </div>

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
                  key={appt.time + appt.patient}
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
      </section>
    </main>
  );
}
