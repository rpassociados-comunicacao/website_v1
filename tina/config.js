import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // muda para "master" se for essa a tua branch
  clientId: null, // só usado no Tina Cloud (pago)
  token: null,    // idem

  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        label: "Artigos",
        name: "artigos",
        path: "content/artigos",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Título" },
          { type: "datetime", name: "date", label: "Data" },
          { type: "image", name: "image", label: "Imagem" },
          { type: "rich-text", name: "body", label: "Conteúdo" },
        ],
      },
    ],
  },
});
