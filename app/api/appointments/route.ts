export async function GET(request: Request) {
  const url = new URL(request.url);
  const provider = url.searchParams.get("provider");
  const status = url.searchParams.get("status");

  const data = [
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
  ].filter((appt) => {
    const matchProvider =
      !provider || provider === "All providers" || appt.provider === provider;
    const matchStatus =
      !status || status === "All statuses" || appt.status === status;
    return matchProvider && matchStatus;
  });

  return Response.json({ data });
}
