import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { riskDisclaimerPage } from "@/content/pages";

export const metadata: Metadata = {
  title: riskDisclaimerPage.meta.title,
  description: riskDisclaimerPage.meta.description,
  alternates: { canonical: "/risk-disclaimer" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Risk disclaimer", path: "/risk-disclaimer" },
];

export default function RiskDisclaimerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <LegalPage doc={riskDisclaimerPage} trail={trail} />
    </>
  );
}
