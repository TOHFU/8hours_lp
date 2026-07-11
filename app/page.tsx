import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Home() {
  return <HomePageContent />;
}
