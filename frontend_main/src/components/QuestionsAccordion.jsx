import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from '../assets/imageQA.svg';
import classes from './QuestionsAccordion.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function QuestionsAccordion() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50} justify="center" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="q1" variant="separated">
              <Accordion.Item className={classes.item} value="q1">
                <Accordion.Control>What services do you offer in web design?</Accordion.Control>
                <Accordion.Panel>
                  We offer a comprehensive range of web design services, including custom website design, responsive design for mobile devices, user experience (UX) optimization, e-commerce solutions, and ongoing website maintenance. Our goal is to create visually appealing and highly functional websites that align with your brand and business objectives.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q2">
                <Accordion.Control>How long does it take to design and launch a website?</Accordion.Control>
                <Accordion.Panel>
                  The timeline for designing and launching a website typically ranges from 4 to 8 weeks, depending on the complexity and specific requirements of your project. We work closely with you throughout the process to ensure timely delivery, from the initial concept to the final launch.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q3">
                <Accordion.Control>Will my website be mobile-friendly?</Accordion.Control>
                <Accordion.Panel>
                  Absolutely! Every website we design is fully responsive, meaning it will look and perform beautifully on all devices, including smartphones, tablets, and desktops. We prioritize mobile optimization to ensure a seamless user experience for all visitors.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q4">
                <Accordion.Control>Can I update the content on my website after it’s launched?</Accordion.Control>
                <Accordion.Panel>
                  Yes, we provide user-friendly content management systems (CMS) like WordPress, allowing you to easily update and manage your website's content without needing technical expertise. We also offer training and ongoing support to help you get the most out of your site.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q5">
                <Accordion.Control>Do you provide SEO services as part of the web design?</Accordion.Control>
                <Accordion.Panel>
                  Yes, we integrate basic on-page SEO practices into every website we design, including keyword optimization, meta tags, and fast-loading pages. For more advanced SEO strategies, we offer additional services to help improve your website’s visibility and ranking on search engines.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q6">
                <Accordion.Control>What does the process look like, and how do we get started?</Accordion.Control>
                <Accordion.Panel>
                  Our process begins with an initial consultation to understand your needs and goals. From there, we move to the design phase, where we create mockups and prototypes for your review. After your approval, we proceed with development, testing, and finally, the launch. To get started, simply contact us to schedule your consultation, and we'll guide you through every step of the way.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="q7">
                <Accordion.Control>What if I need changes or updates to my website after it's live?</Accordion.Control>
                <Accordion.Panel>
                  We understand that your website may need updates or changes over time. We offer flexible maintenance packages and ad-hoc support to address any updates, enhancements, or technical issues. Whether it's a small tweak or a major update, we're here to ensure your website remains up-to-date and performs optimally.
                </Accordion.Panel>
              </Accordion.Item>

            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}