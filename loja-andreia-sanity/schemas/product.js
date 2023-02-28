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
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'preco',
        title: 'Preco',
        type: 'number',
      },
      { 
        name: 'detalhes',
        title: 'Detalhes',
        type: 'string',
      }
    ]
  }