import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HomeLandingBanner.module.css';

export function HomeLandingBanner() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              radius="lg"
              className={classes.control}
              mt={40}
            >
              View Our Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}