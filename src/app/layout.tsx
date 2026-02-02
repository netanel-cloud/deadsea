import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "תיירות ים המלח | Dead Sea Tourism",
  description: "חוויות מדבר בלתי נשכחות - טיולים, אטרקציות ולינה במקום הנמוך בעולם. Unforgettable desert experiences at the lowest place on Earth.",
  keywords: ["ים המלח", "Dead Sea", "תיירות", "tourism", "ריידרים", "e-riders", "ג'יפים", "jeeps", "לינה", "accommodation", "ישראל", "Israel"],
  authors: [{ name: "Dead Sea Tourism" }],
  openGraph: {
    title: "תיירות ים המלח | Dead Sea Tourism",
    description: "חוויות מדבר בלתי נשכחות במקום הנמוך בעולם",
    type: "website",
    locale: "he_IL",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
