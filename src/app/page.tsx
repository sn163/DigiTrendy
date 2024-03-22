"use client";
import NavBar from "./_components/navbar/Navbar";
import Dashboard from "./_components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="w-full" style={{ backgroundColor: "#fdfdfd" }}>
      <NavBar />
      <Dashboard />
      <footer></footer>
    </div>
  );
}
