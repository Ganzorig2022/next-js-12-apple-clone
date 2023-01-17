import {BiCategory} from 'react-icons/bi'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiCategory, //http://localhost:3333/desk/ URL deerh sanity studio dotorh "Category"-iig icon-toi haruulna.
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      //http://localhost:3333/desk/category dotor shineer category uusgeed "Title" dr ni ner ogood, "Slug" dr ni "generate" darhad "Title"-iin bichsen text-iig "Slug" dr text-eer awdag.
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
