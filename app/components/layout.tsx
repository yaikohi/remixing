import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen font-mono bg-blue-50 dark:bg-slate-900">
      {children}
    </div>
  );
}
