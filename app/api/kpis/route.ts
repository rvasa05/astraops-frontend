export async function GET() {
  const data = [
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

  return Response.json({ data });
}
