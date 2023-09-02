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
      name: 'parcelas',
      title: 'Parcelas',
      type: 'number'
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
      of: [{
        type: "string",
        options: {
          list: [
            { title: 'PP', value: 'PP' },
            { title: 'P', value: 'P' },
            { title: 'M', value: 'M' },
            { title: 'G', value: 'G' },
            { title: 'GG', value: 'GG' },
          ],
        },
      }]
    },
    {
      name: 'detalhes',
      title: 'Detalhes',
      type: 'string',
    }
  ]
}