import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./Sidebar.tsx";

export const metadata: Metadata = {
  title: "AstraOps",
  description: "Practice intelligence for private medical practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="flex-1">
            <div className="md:pl-0">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
