import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import { QuestionsCarousel } from '../components/QuestionsCarousel';
import { QuestionsAccordion } from '../components/QuestionsAccordion';

export function Questions() {
  return (
    <>
    <HeaderMenu />
    <QuestionsCarousel />
    <QuestionsAccordion />

    <FooterArea />
    </>
  );
}