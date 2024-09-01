import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { ProductsBanner } from '../components/ProductsBanner';
import { ProductsImageIntro1 } from '../components/ProductsImageIntro1';
import { ProductsImageIntro2 } from '../components/ProductsImageIntro2';
import { ProductsIntroCards } from '../components/ProductsIntroCards';

import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import { HelmetContent } from '../components/HelmetContent';

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}


export function Products() {
  useScrollToTop(); 

  return (
    <>
    <HelmetContent
      title='HaoWeb - website design'
      description='HaoWeb provides variant website solutions and products, such as e-commerce website, blogger, company website design, and general web solution consultants.'
      robots='index, follow'
      pageUrl='products'
      imageUrl='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      type='article'
     />
    <HeaderMenu />
    <ProductsBanner />
    <ProductsImageIntro1 />
    <ProductsImageIntro2 />
    <ProductsIntroCards />
    <FooterArea />
    </>
  );
}