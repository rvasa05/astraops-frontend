
import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function DataTable({ title, subtitle, children }: Props) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {(title || subtitle) ? (
        <div className="p-6 pb-4">
          {title ? <h2 className="text-lg font-semibold">{title}</h2> : null}
          {subtitle ? (
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
          ) : null}
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <div className={(title || subtitle) ? "px-6 pb-6" : "p-6"}>
          {children}
        </div>
      </div>
    </section>
  );
}
