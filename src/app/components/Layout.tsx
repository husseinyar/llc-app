"use client"

import Navbar from './Navbar';
import Footer from './Footer';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex dark:text-white flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

