'use client';
import { ThemeProvider } from "next-themes";

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" >
      <div className="text-gray-700 dark:text-white dark:bg-slate-900 min-h-screen select-none transition-colors duration-300" >
        {children}
      </div>
    </ThemeProvider>
  )
}
