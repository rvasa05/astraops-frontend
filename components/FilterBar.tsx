import React from "react";

type Props = {
  children: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
};

export default function FilterBar({ children, right, className = "" }: Props) {
  return (
    <div
      className={`mb-6 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">{children}</div>
      {right ? <div className="flex items-center gap-2">{right}</div> : null}
    </div>
  );
}