import { getPayload } from "payload";
import React from "react";
import config from "@/payload.config";
import "./styles.css";

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  await payload.findGlobal({
    slug: "header",
  });

  return <div>page</div>;
}
