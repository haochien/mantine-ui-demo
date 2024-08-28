import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './ProductsImageIntro1.module.css';


export function ProductsImageIntro1() {

  return (
    <Container fluid bg="light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))">
      <Container size="xl" py="xl">
        <Grid gutter={80}>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
            src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Running challenge"
            height={400}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>

            <Title className={classes.title} order={2} >
              Realtime Deepfakes
            </Title>

            <Title className={classes.subtitle } order={2} c="dimmed" >
              Always be yourself. Unless you can be Jonas.
            </Title>

            <Text className={classes.discription}>
            How good could an AI-generated PowerPoint presentation actually be? We tried it and found out: Not too shabby at all.

            In the age of digitisation and AI, many tasks in our everyday lives can be automated very easily. But until recently, the everlasting torment of the average white collar, the PowerPoint presentation, had to be painstakingly created and presented by hand. But all of that ends now!

            The TNG Innovation Hacking Team presents the PowerPoint Ghostwriter. Give it only the title and it automagically generates a complete slide deck, from headlines to matching images. Even the performance is taken over by artificial intelligence: a realistic deep fake avatar - trained with the knowledge of the entire Internet - takes you through the slides.
            </Text>


          </Grid.Col>

        </Grid>
      </Container>
    </Container>
  );
}