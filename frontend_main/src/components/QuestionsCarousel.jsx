import { Carousel } from '@mantine/carousel';
import { Image, useMantineTheme, Paper, Text, Title, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import classes from './QuestionsCarousel.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80',
    title: 'We care about your Question',
    description: "We understand that your questions are important, and we're here to help. Below, you'll find detailed answers to common inquiries, designed to provide you with the information and support you need. If you don't see your question addressed, feel free to reach out—because your concerns are our priority.",
    showButton: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Need support from experts',
    description: "Our specialists are ready to assist you with personalized support tailored to your needs. Whether you have a complex issue or just need a bit of guidance, reach out to our expert team for dedicated help. We're here to ensure you get the answers and assistance you deserve.",
    showButton: true,
  },

];

function Card({ image, title, description, showButton }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) -80%, #062343 80%), url(${image})` }}
      className={classes.card}
    >

        <Title order={3} className={classes.title} ta="center">
          {title}
        </Title>

        <Text className={classes.description} ta="center">
          {description}
        </Text>

        {showButton && <Button variant="outline" >
          Contact Us
        </Button>}


    </Paper>
  );
}


export function QuestionsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators classNames={classes}>
      {slides}
    </Carousel>
  );
}