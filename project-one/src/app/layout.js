import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Travel Guide Website",
  description: "best travel guidence",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} w-screen h-screen bg-black`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="pt-20 flex-1">{children}</main>
      </body>
    </html>
  );
}
