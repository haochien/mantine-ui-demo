import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import image from '../assets/image404.svg';

import { HeaderMenu } from '../components/HeaderMenu';
import { FooterArea } from '../components/FooterArea';

import classes from './NotFound404.module.css';

export function NotFound404() {
  const navigate = useNavigate();

  return (
    <>
    <HeaderMenu />

    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }} >
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button 
            variant="outline" 
            size="md" mt="xl" 
            className={classes.control}
            onClick={(event) => {
              navigate("/", { replace: true });
            }}>
            Get back to home page
          </Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>

    <FooterArea />
    </>
  );
}