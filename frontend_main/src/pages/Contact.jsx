import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { ContactImageIntro } from '../components/ContactImageIntro';
import { ContactBanner } from '../components/ContactBanner';

export function Contact() {
  return (
    <>
    <HeaderMenu />
    <ContactBanner />
    <ContactImageIntro />
    <FooterArea />
    </>
  );
}