import { Container, Title, Text, Button, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import classes from './HomeLandingBanner.module.css';


export function HomeLandingBanner() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Crafting{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Modern
              </Text>{' '}
              Websites for Your Brand
            </Title>

            <Text className={classes.description} mt={30}>
              We create sleek, user-friendly websites that elevate your brand and drive business growth in the digital world.
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
              size= "lg"
              radius="md"
              mt="xl"
              onClick={(event) => {
                navigate("/products", { replace: true });
              }}
            >
              View Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}