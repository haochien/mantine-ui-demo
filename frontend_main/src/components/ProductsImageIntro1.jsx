import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './ProductsImageIntro1.module.css';


export function ProductsImageIntro1() {

  return (
    <Container id="pd1" fluid bg="light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))">
      <Container size="xl" py="xl">
        <Grid gutter={80}>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
            alt="Running challenge"
            height={400}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>

            <Title className={classes.title} order={2} >
              Strategic Web Solutions
            </Title>

            <Title className={classes.subtitle } order={2} c="dimmed" >
              Aligning Your Digital Presence with Business Success.
            </Title>

            <Text className={classes.discription}>
            Our Web Solutions and Consulting services are designed to align your digital presence with your overall business goals. 
            We begin by conducting a thorough analysis of your current online presence and identifying opportunities for growth. 
            Our expert consultants then work with you to develop a comprehensive web strategy that includes everything from site architecture and user flow to content strategy. 
            We don’t just create websites—we craft digital solutions that drive results. Whether you’re launching a new site or revamping an existing one, our consulting services ensure that every element of your website is optimized for performance, engagement, and success.
            </Text>


          </Grid.Col>

        </Grid>
      </Container>
    </Container>
  );
}