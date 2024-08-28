import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import image from '../assets/logo1.png';
import classes from './HeaderMenu.module.css';
import { ColorThemeSwitch } from './ColorThemeSwitch';

import {
    Container,
    Group,
    Button,
    UnstyledButton,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem, Image
  } from '@mantine/core';


import {
    IconChevronDown,
  } from '@tabler/icons-react';


const links = [
  { link: '/Products', label: 'Products' },
  { link: '/questions', label: 'Q&A' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },

];

export function HeaderMenu() {
  //const [active, setActive] = useState(links[0].link);
  //const navigate = useNavigate();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      //data-active={active === link.link || undefined}
      onClick={(event) => {
      //  setActive(link.link);
      //  navigate(link.link, { replace: true });
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>

        

        <a
          key={'home'}
          href={'/'}
        >
          <Image src={image} h={40} fit="contain" alt="Logo" />
        </a>

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>



        <Group gap={5}>
          <Group gap={0} visibleFrom="sm">
            <a
              key={'en'}
              className={classes.language}
              href={'/'}
              onClick={(event) => event.preventDefault()}
            >
              EN
            </a>
            <a
              key={'de'}
              className={classes.language}
              href={'/'}
              onClick={(event) => event.preventDefault()}
            >
              DE
            </a>
          </Group>

          <ColorThemeSwitch />
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </header>


    <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {items}

          <Group gap={0} mt={rem(50)}>
            <a
              key={'en'}
              className={classes.language}
              href={'/'}
              onClick={(event) => event.preventDefault()}
            >
              EN
            </a>
            <a
              key={'de'}
              className={classes.language}
              href={'/'}
              onClick={(event) => event.preventDefault()}
            >
              DE
            </a>
          </Group>
        </ScrollArea>



        
      </Drawer>

    </>








  );
}