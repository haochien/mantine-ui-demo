import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { ProductsBanner } from '../components/ProductsBanner';
import { ProductsImageIntro1 } from '../components/ProductsImageIntro1';
import { ProductsImageIntro2 } from '../components/ProductsImageIntro2';
import { ProductsIntroCards } from '../components/ProductsIntroCards';

export function Products() {
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