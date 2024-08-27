import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './HomeImageIntro.module.css';


export function HomeImageIntro() {

  return (
    <Container fluid bg="var(--mantine-color-dark-8)">
      <Container size="xl" py="xl">
        <Grid gutter={80}>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Image
            src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Running challenge"
            height={400}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>

            <Title className={classes.title} order={2} >
              A fully featured React components library for your next project
            </Title>

            <Text c="dimmed"  className={classes.discription}>
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

            <Group justify="center">
              <Button
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                size="lg"
                radius="md"
                mt="xl"
              >
                Get started
              </Button>
            </Group>

          </Grid.Col>

        </Grid>
      </Container>
    </Container>
  );
}