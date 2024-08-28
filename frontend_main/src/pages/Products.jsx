import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { ProductsBanner } from '../components/ProductsBanner';
import { ProductsImageIntro1 } from '../components/ProductsImageIntro1';
import { ProductsImageIntro2 } from '../components/ProductsImageIntro2';
import { ProductsIntroCards } from '../components/ProductsIntroCards';

import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';

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
    <HeaderMenu />
    <ProductsBanner />
    <ProductsImageIntro1 />
    <ProductsImageIntro2 />
    <ProductsIntroCards />
    <FooterArea />
    </>
  );
}