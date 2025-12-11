"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/appointments", label: "Appointments" },
  { href: "/reports", label: "Reports (coming soon)" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive =
      href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);

    const baseClasses =
      "block rounded-lg px-3 py-2 text-sm transition-colors";

    if (isActive) {
      return (
        baseClasses +
        " bg-gray-100 font-semibold text-gray-900"
      );
    }

    return baseClasses + " text-gray-700 hover:bg-gray-100";
  };

  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r border-gray-200 bg-white">
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-bold tracking-tight">
          AstraOps
        </h1>
        <p className="text-xs text-gray-500">
          Prototype – internal use only
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={getLinkClasses(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 py-3 border-t text-xs text-gray-400">
        v0.1 · Early prototype
      </div>
    </aside>
  );
}
