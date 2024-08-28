import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Title } from '@mantine/core';
import classes from './ProductsIntroCards.module.css';

const mockdata = [
  {
    title: 'E-commerce Solution - Bmazon Co.',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
  },
  {
    title: 'Business Websites -  DomDom GmbH',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
  },
  {
    title: 'Professional Web App: AI Article Creator',
    image:
      'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2023',
  },
];

export function ProductsIntroCards() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} height={350} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.cardTitle} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container fluid bg="light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))">
      <Container size="xl" py="xl">

        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>

        <Text c="dimmed" className={classes.subtitle} >
          We don't only like to make cool stuff, we also love to talk about it! Over the years we've delivered over a dozen different flavours of talks at over a hundred events and conferences. We aim to make our talks a refreshing mix of educational and entertaining tech topics. Check out a selection of our recent conference talks!
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 3 }}>{cards}</SimpleGrid>
      </Container>
    </Container>
  );
}