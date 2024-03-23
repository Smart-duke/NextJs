import { Metadata } from "next";
export const metadata = {
  title: {
    absolute: "",
    default: "Precious Longe Learns Next",
    template: "%s | Precious Longe",
  },
  description: "Precious Longe NextJs Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <h2>Header</h2>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <h2>Footer of the page </h2>
        </footer>
      </body>
    </html>
  );
}
