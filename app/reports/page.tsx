export default function ReportsPage() {
  return (
    <main className="min-h-screen p-8">
      {/* Page header */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Reports (coming soon)
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          This page will become the central reporting hub for practice owners
          and administrators to review financial, operational, and patient
          access performance in one place.
        </p>
      </header>

      <section className="space-y-6 max-w-3xl">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            Revenue & collections performance
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Future version: trend lines and drill-downs that answer questions
            like:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>How are charges, payments, and adjustments trending by payer?</li>
            <li>Which providers or locations are underperforming on collections?</li>
            <li>Are we being paid according to our contracts?</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            Denials, rework, and revenue leakage
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Future version: denial heatmaps and root-cause views, including:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Top denial reasons by CPT code, payer, and provider.</li>
            <li>
              Preventable denials with clear recommendations for front-desk,
              billing, or coding changes.
            </li>
            <li>
              Estimated &quot;recoverable&quot; revenue if these fixes are
              implemented.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            Access, capacity, and no-show analytics
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Future version: access and utilization reports that show:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Provider schedule utilization and overtime risk.</li>
            <li>No-show and late-cancellation trends by visit type.</li>
            <li>
              Impact of reminders, overbooking, and telehealth options on
              no-show rates.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            How this connects to today&apos;s prototype
          </h2>
          <p className="text-sm text-gray-600">
            The current dashboard and schedule views are the first step. Over
            time, AstraOps will pull data from EHR, practice management, and
            billing systems to automatically generate these reports and present
            a short, prioritized list of actions for the practice to take each
            week to reduce leakage and improve margins.
          </p>
        </div>
      </section>
    </main>
  );
}
