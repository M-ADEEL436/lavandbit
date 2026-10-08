import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { termsPage } from "@/content/pages";

export const metadata: Metadata = {
  title: termsPage.meta.title,
  description: termsPage.meta.description,
  alternates: { canonical: "/terms" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Terms of service", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <LegalPage doc={termsPage} trail={trail} />
    </>
  );
}
