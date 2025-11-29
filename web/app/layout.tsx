import "./globals.css";

export const metadata = {
  title: "Gorven | Full-stack Developer",
  description: "Portfolio of Gorven Salaveria, full-stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@600;700;800&family=Lato:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-white text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
