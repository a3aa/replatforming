import type { ReactNode } from "react";
import "@/app/(editor)/editor.css";

export const metadata = {
  title: "Editor Papiro di Laurea",
};

export default function PapiroLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-100">
        <header className="bg-base-200 shadow-md p-4 text-center font-bold text-lg">
          🎓 Editor Papiro di Laurea
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
