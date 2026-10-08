import type { Metadata } from "next";
import { Google_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Google Sans for display, Inter for body, IBM Plex Mono for figures.
 *
 * Google Sans is the face Google AI Studio sets its headings in, which is the
 * look the client asked for. It is safe to use: it is listed in the Google
 * Fonts directory under the SIL Open Font License, so it is free for
 * commercial use on a third-party site. (It is not the same as Product Sans,
 * the older Google logo face, which is not openly licensed.)
 *
 * Inter stays as the body face, so only the display layer changed. The mono
 * face keeps prices and statistics aligned.
 */
const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans",
  display: "swap",
  /* Google Sans is newer than Next's bundled metric-override table, so
     Next cannot compute an adjusted local fallback for it and prints
     "Failed to find font override values" on every build. Turning the
     adjustment off states that plainly instead of leaving a warning nobody
     can act on: the behaviour is the same either way. The fallback stack is
     what actually limits the swap jump, and Inter is already on the page as
     the body face, so headings hold their shape before the webfont lands. */
  adjustFontFallback: false,
  fallback: ["Inter", "system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* 400 and 500 only. 600 was shipping a file nobody used: the single place
   the mono face takes a weight is font-medium (500) on the step numbers in
   how-it-works, and no rule anywhere asks for semibold mono. */
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

/** Brand first, matching the homepage H1 and the targeted keyword. */
const defaultTitle = "Lavandbit | AI Trading Tools & Market Analysis Australia";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    locale: site.locale,
    url: site.url,
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
