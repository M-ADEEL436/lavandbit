import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { privacyPage } from "@/content/pages";

export const metadata: Metadata = {
  title: privacyPage.meta.title,
  description: privacyPage.meta.description,
  alternates: { canonical: "/privacy-policy" },
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Privacy policy", path: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <LegalPage doc={privacyPage} trail={trail} />
    </>
  );
}
