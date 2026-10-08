import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RiskRewardCalculator } from "@/components/tools/RiskRewardCalculator";
import { getTool } from "@/content/tools";
import { notFound } from "next/navigation";

const tool = getTool("risk-reward-calculator");

export const metadata: Metadata = tool
  ? {
      title: tool.metaTitle,
      description: tool.description,
      alternates: { canonical: `/tools/${tool.slug}` },
      openGraph: { url: `/tools/${tool.slug}`, title: tool.metaTitle, description: tool.description },
    }
  : {};

export default function Page() {
  if (!tool) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: tool.name, path: `/tools/${tool.slug}` },
  ];

  return <ToolLayout tool={tool} calculator={<RiskRewardCalculator />} trail={trail} />;
}
