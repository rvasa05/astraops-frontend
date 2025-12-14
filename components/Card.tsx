import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: Props) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: Props) {
  return <div className={`p-4 pt-0 ${className}`}>{children}</div>;
}
