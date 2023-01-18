## 1 - Running projects

1. Sanity--iin SERVER-ee asaahdaa...

```bash
cd apple-sanity
```

```bash
npm run dev
```

2. Front-end SERVER-ee asaahdaa

```bash
yarn dev
```

## 2 - Add local repo to remote

https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

```bash
git add .
```

```bash
git commit -m "msg"
```

```bash
 git remote add origin https://github.com/Ganzorig2022/next-js-12-apple-clone.git
```

(for checking)

```bash
git remote -v
```

```bash
git push --set-upstream origin main
```

## 3 - Installing SANITY.io CMS (Content Management System)

https://www.sanity.io/docs/create-a-sanity-project

Install & init sanity

```bash
npm create sanity@latest -- --template clean --create-project "PROJECT NAME HERE" --dataset production
```

1. Ok to Proceed --> Click Enter
2. Project output path --> Click Enter
3. Do you want to use Typescript? --> Yes
4. Package manager to use for installing dependencies? --> npm-iig songow
5. "/apple-sanity" iim nertei folder uusne.

```bash
cd apple-sanity
```

```bash
npm run dev
```

([vite] Internal server error: [postcss] Cannot read properties of
undefined (reading 'config'))
iim aldaa garwal
https://stackoverflow.com/questions/74791058/sanity-io-vite-internal-server-error-postcss-cannot-read-properties-of-unde

9. terminal dr http://localhost:3333 link garch irne.
10. Tvvn dr daraad --> Choose login --> Gmail-eer newterne.

## 4 - Preparing SANITY - (Getting Api Key from SANITY)

https://www.sanity.io/manage/personal/project

1. Project ID-gaa awna.
2. API --> Add Api Token
3. Viewer Access --> Editor bolgoj songono.
4. Save darhad API key ogno. Teriigee ".env" dotroo hiine.

## 5 - Creating SANITY SCHEMAS

```bash
   npm i react-icons
```

1. "/apple-sanity/schemas/" folder dotor "category.js, product.js" geh met gesen schema uusgeed, "index.js" dr ni importlow.
2. http://localhost:3333 URL dr luu orood "Category"-oo hesgee PUBLISH hj uusgene.

## 6 - Checking "fetching data" on SANITY STUDIO server

https://www.sanity.io/docs/how-queries-work

1. http://localhost:3333/vision dotor "Query" dotor
2. \*[_type == 'category'] {
   \_id,
   ...
   }
3. ... ingej bichwel "Category" dotorh buh data-g awna.
4. \*[_type == 'category'] {
   \_id,
   slug, title
   }
5. gej bichwel zowhon "Slug", "Title" field-uudeer awna.

## 7 - Getting SANITY Data from the FRONT-END side Using GROQ-QUERY

1. Installing "next-sanity" package
   https://www.npmjs.com/package/next-sanity

```bash
npm install next-sanity @portabletext/react @sanity/image-url
```

=====================BACK END Coding===================================

2. "/sanity.js" file uusgene. Vvn dotorh "process.env.SANITY_API_TOKEN" geh metee ".env.local"-aas awna.
3. "/pages/api/getCategories.ts" file uusgeed "next-sanity"-iin GROQ-iig ashiglaad "query"-ee awna.
4. http://localhost:3000/api/getCategories ene URL dr ochxod
5. {
   \_createdAt: '2023-01-17T13:01:05Z',
   \_id: 'e684993d-60f7-4848-9680-dbfc99bb74b9',
   \_rev: 'Fqj4qxBnvrmMYRi0it9Muj',
   \_type: 'category',
   \_updatedAt: '2023-01-17T13:01:05Z',
   slug: { \_type: 'slug', current: 'apple-watch' },
   title: 'Apple Watch'}
6. iim objectuud Array[] baidlaar irne.
7. "/pages/index.tsx" dotor "getServerSideProps"-oor categories-oo awna.

## 8 - REDUX (State Management)

## 8.1 Preparing Redux Store and Slice

https://redux-toolkit.js.org/introduction/getting-started
https://redux-toolkit.js.org/tutorials/typescript

1. Installing Redux Toolkit

```bash
npm i @reduxjs/toolkit react-redux
```

2. Creating a redux folder with file "/redux/store.ts"
   "/redux/store.ts" dotroo "reducer:{basket:basketReducer}
3. Wrapping Redux Store
   "/pages/\_app.tsx" dotor...
   https://redux-toolkit.js.org/tutorials/quick-start
4. Create a Redux State Slice
   https://redux-toolkit.js.org/tutorials/quick-start dotroos jishee "slice" code huulj awna. ("/redux/basketSlice.ts" dotroo...)
5. Sagsan dah baraag ustgah, nemeh functionality bugd "basketSlice" dotor bga.

## 8.2 Adding items in the <Product/> component

1. useDispatch() hook import
2. dispact(addTobasket(product))...

## 8.3 Getting items length in the <Header/> component

1. useSelector(selectBasketItems) hook import
2.

## Custom Toaster Alert by React-hot-toast

1. Installing

```bash
yarn add react-hot-toast
```

https://github.com/timolins/react-hot-toast

2. "/pages/\_app.tsx" dotroo WRAP hiine.
3. "/components/Product.tsx" dotor ashiglaw.

## Using HERO Icons

```bash
npm i @heroicons/react
```

1. import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

## Custom Font

https://fonts.google.com/specimen/Poppins

1. "/styles/globals.css" dotor importlono. "/tailwind.config.js" dotor fontFamily: body gej ogson uchraas "font-body" gdg custom font-toi bolno.
   @layer base {
   body {
   @apply font-body text-[#232428];
   }
   }

2. "/tailwind.config.js" dotor

fontFamily: {
body: ["Poppins", "sans-serif"],
},

## Headless UI

https://headlessui.com/
https://github.com/tailwindlabs/headlessui

```bash
npm i @headlessui/react@latest
```

1. Tabs (card)
   https://headlessui.com/react/tabs

## Installing Currency Formatter

```bash
npm i --save-dev @types/react-currency-formatter --force
```

```bash
npm i -D react-currency-formatter --force
```
