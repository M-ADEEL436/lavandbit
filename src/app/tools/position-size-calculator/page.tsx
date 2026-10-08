import type { Metadata } from "next";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { PositionSizeCalculator } from "@/components/tools/PositionSizeCalculator";
import { getTool } from "@/content/tools";
import { notFound } from "next/navigation";

const tool = getTool("position-size-calculator");

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

  return <ToolLayout tool={tool} calculator={<PositionSizeCalculator />} trail={trail} />;
}
