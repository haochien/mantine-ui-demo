import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import classes from './HomeImageIntro.module.css';


export function HomeImageIntro() {
  const navigate = useNavigate();

  return (
    <Container fluid bg="light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))">
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
             Innovative Designs, Comprehensive Services, Exceptional Results
            </Title>

            <Text c="dimmed"  className={classes.discription}>
            we offer cutting-edge web design services and premium products, including custom websites, responsive templates, e-commerce solutions, and more. 
            Our innovative designs and comprehensive support ensure your site is visually stunning, highly functional, and optimized for success. Elevate your online presence with us.
            </Text>

            <Group justify="center">
              <Button
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                size="lg"
                radius="md"
                mt="xl"
                onClick={(event) => {
                  navigate("/products", { replace: true });
                }}
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