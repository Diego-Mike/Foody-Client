import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import ReactQueryWrapper from "./ReactQueryWrapper";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Foody App",
  description: "Reserva asientos en tu restaurante favorito !",
  icons: {
    icon: "./corporative_logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={font.className}>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  );
}
