import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { QuestionsCarousel } from '../components/QuestionsCarousel';
import { QuestionsAccordion } from '../components/QuestionsAccordion';

import { HelmetContent } from '../components/HelmetContent';

export function Questions() {
  return (
    <>
    <HelmetContent
      title='HaoWeb - Questions'
      description='The frequent asked Questions regarding HaoWeb are listed here. You can find the most completed Q&A in this page.'
      robots='index, follow'
      pageUrl='questions'
      imageUrl='https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80'
      type='article'
     />
    <HeaderMenu />
    <QuestionsCarousel />
    <QuestionsAccordion />

    <FooterArea />
    </>
  );
}