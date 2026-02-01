import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "", // Lascia null per il lavoro in locale
  token: "",    // Lascia null per il lavoro in locale
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pagine",
        path: "content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "titolo_grande",
            label: "Titolo Principale",
          },
          {
            type: "string",
            name: "sottotitolo",
            label: "Sottotitolo/Bio",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "post",
        label: "News / Articoli",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titolo News",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data",
          },
          {
            type: "image",
            name: "image",
            label: "Immagine Copertina",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Testo Articolo",
            isBody: true,
          },
        ],
      },
    ],
  },
});