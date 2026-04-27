import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Fresh Juice Business System",
  description: "Juice sales and inventory management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}