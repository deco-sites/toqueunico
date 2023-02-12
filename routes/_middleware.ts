import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 512,
  site: "toqueunico",
  domains: ["toqueunico.deco.site"],
});