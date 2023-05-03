export default {
    name: 'produto',
    title: 'Produto',
    type: 'document',
    fields: [
      {
        name: 'imagem',
        title: 'Imagem',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'nome',
        title: 'Nome',
        type: 'string',
      },
      { 
        name: 'identificador',
        title: 'Identificador',
        type: 'slug',
        options: {
          source: 'nome',
          maxLength: 90,
        }
      },
      { 
        name: 'preco',
        title: 'Preco',
        type: 'number',
      },
      {
        name: "tamanho",
        title: "Tamanho",
        type: "array",
        of: [
          {type: "PP"},
          {type: "P"},
          {type: "M"},
          {type: "G"},
          {type: "GG"}
        ]
      },
      { 
        name: 'detalhes',
        title: 'Detalhes',
        type: 'string',
      }
    ]
  }