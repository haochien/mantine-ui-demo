import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { ContactImageIntro } from '../components/ContactImageIntro';
import { ContactBanner } from '../components/ContactBanner';

import { HelmetContent } from '../components/HelmetContent';

export function Contact() {
  return (
    <>
    <HelmetContent
      title='HaoWeb - Contact Us'
      description='HaoWeb cares the questions and feedback from our clients. You can find our contact details here or send us the message directly via this website.'
      robots='index, follow'
      pageUrl='contact'
      imageUrl='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80'
      type='article'
     />
    <HeaderMenu />
    <ContactBanner />
    <ContactImageIntro />
    <FooterArea />
    </>
  );
}