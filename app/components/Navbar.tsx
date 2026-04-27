import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px 40px",
        backgroundColor: "#f3f4f6",
        borderBottom: "1px solid #ddd",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/sales">Sales</Link>
      <Link href="/inventory">Inventory</Link>
      <Link href="/expenses">Expenses</Link>
      <Link href="/reports">Reports</Link>
    </nav>
  );
}