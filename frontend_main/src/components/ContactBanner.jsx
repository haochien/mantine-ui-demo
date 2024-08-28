import { Container, Title, Text, Button } from '@mantine/core';
import classes from './ContactBanner.module.css';

export function ContactBanner() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Contact Us
            </Title>

          </div>
        </div>
      </Container>
    </div>
  );
}