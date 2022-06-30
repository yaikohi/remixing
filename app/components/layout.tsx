import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen font-mono bg-blue-600">
            {children}
        </div>
    )
}