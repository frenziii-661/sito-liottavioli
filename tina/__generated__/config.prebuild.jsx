// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pagine",
        path: "content/pages",
        format: "md",
        fields: [
          { type: "string", name: "titolo_grande", label: "Titolo Principale" },
          { type: "string", name: "sottotitolo", label: "Sottotitolo/Bio", ui: { component: "textarea" } }
        ]
      },
      {
        name: "post",
        label: "News / Articoli",
        path: "content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titolo News", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Data" },
          { type: "image", name: "image", label: "Immagine Copertina" },
          { type: "rich-text", name: "body", label: "Testo Articolo", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
