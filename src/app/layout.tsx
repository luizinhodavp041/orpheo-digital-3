import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "Uma landing page moderna e profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
