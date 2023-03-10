import { Tab } from '@headlessui/react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Basket from '../components/Basket';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Product from '../components/Product';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';

interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  // console.log(products);

  const showProducts = (category: number) => {
    //filter products by category
    return products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => <Product product={product} key={product._id} />);
  };

  return (
    <div className=''>
      <Head>
        <title>Apple</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Basket />

      {/* <Landing/> component-iin height-iig 200vh-eer awsnaar deeguur ni burheh sectiond deeshee dooshoo cholootei hodloh bolomjtoi boloh yum...*/}
      <main className='relative h-[200vh] bg-[#e7ecee] '>
        <Landing />
      </main>

      {/* <Landing/> component-iin deeguur burhej garch irdeg heseg...*/}
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]'>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            New Promos
          </h1>

          {/* Clickable Tabs */}
          <Tab.Group>
            <Tab.List className='flex justify-center'>
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                      selected
                        ? 'borderGradient bg-[#35383C] text-white'
                        : 'border-b-2 border-[#35383C] text-[#747474]'
                    }`
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            {/* Clickable Tabs */}
            <Tab.Panels className='mx-auto max-w-fit pt-10 pb-24 sm:px-4'>
              <Tab.Panel className='tabPanel'>{showProducts(0)}</Tab.Panel>
              <Tab.Panel className='tabPanel'>{showProducts(1)}</Tab.Panel>
              <Tab.Panel className='tabPanel'>{showProducts(2)}</Tab.Panel>
              <Tab.Panel className='tabPanel'>{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;

// backend code
// Getting categories from SANITY
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
