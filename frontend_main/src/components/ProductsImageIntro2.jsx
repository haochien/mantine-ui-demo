import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group, useMantineTheme } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './ProductsImageIntro2.module.css';


export function ProductsImageIntro2() {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const gridOrder = isLargeScreen ? {text: 1, image: 2} : {text: 2, image: 1}

  return (
    <Container fluid bg="light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))">
      <Container size="xl" py="xl">
        <Grid gutter={80}>


            <Grid.Col span={{ base: 12, md: 6 }} order={gridOrder.text}>
                <Title className={classes.title} order={2} >
                  Tech & UI Design
                </Title>

                <Title className={classes.subtitle } order={2} c="dimmed" >
                  Innovative Technology Meets Seamless User Experience!
                </Title>

                <Text className={classes.discription}>
                  In today’s fast-paced digital world, staying ahead of the curve requires leveraging the latest technologies and crafting exceptional user experiences. 
                  We utilize modern frameworks, responsive design techniques, and advanced tools to build websites that are fast, secure, and scalable. 
                  Our UI design focuses on creating interfaces that are user-friendly, accessible, and engaging, ensuring that visitors can easily navigate and interact with your site. 
                  By prioritizing both form and function, we deliver websites that not only look great but also provide a seamless experience for every user, across all devices.
                </Text>
            </Grid.Col>


          <Grid.Col span={{ base: 12, md: 6 }} order={gridOrder.image}>
            <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Running challenge"
            height={400}
            />
          </Grid.Col>

        </Grid>
      </Container>
    </Container>
  );
}