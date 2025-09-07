import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Portfolio Hub",
  description: "My personal project dashboard",
};

const themeInit = `
(function() {
  try {
    const ls = localStorage.getItem("theme");
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const wantDark = ls ? (ls === "dark") : mql.matches;
    if (wantDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <header className="border-b border-neutral-200/60 dark:border-neutral-800 sticky top-0 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              Portfolio Hub
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link
                href="/projects"
                className="hover:opacity-80 transition-opacity"
              >
                Projects
              </Link>
              {/* Toggle-knappen */}
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm opacity-80">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
