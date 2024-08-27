import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Image, Container, Group, useMantineTheme } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './ProductsImageIntro2.module.css';


export function ProductsImageIntro2() {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  const gridOrder = isLargeScreen ? {text: 1, image: 2} : {text: 2, image: 1}

  return (
    <Container fluid bg="var(--mantine-color-dark-7)">
      <Container size="xl" py="xl">
        <Grid gutter={80}>


            <Grid.Col span={{ base: 12, md: 6 }} order={gridOrder.text}>
                <Title className={classes.title} order={2} >
                  Shitposting AI
                </Title>

                <Title className={classes.subtitle } order={2} c="dimmed" >
                  Why discuss online? There's an AI for that!
                </Title>

                <Text className={classes.discription}>
                  Using modern AI approaches such as GPT-2, Tacotron and Conformers, we created fully autonomous robot heads that engage in heated social media discussions, completely taking the human out of the loop.

                  The TNG Innovation Hacking Team created a prototype of an end-to-end natural language understanding system, employing techniques such as Speech-to-Text (STT), Conditional Text Generation and Text-To-Speech (TTS).

                  Social media comments have become the predominant medium for public discussion. However, discussions on Facebook, Twitter and Reddit are notorious for their poor debate culture and missing conclusiveness. The obvious solution to this tremendous waste of time is automation of such fruitless discussions using a bot.
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