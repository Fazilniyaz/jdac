import type { MetadataRoute } from "next";
import { company } from "@/content/academy";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.academyName} · ${company.tagline}`,
    short_name: company.academyName,
    description: `${company.programType}`,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F33",
    theme_color: "#0B1F33",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
