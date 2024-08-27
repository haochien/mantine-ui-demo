import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';
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
    rem,
  } from '@mantine/core';


import {
    IconChevronDown,
  } from '@tabler/icons-react';


const links = [
  { link: '/Products', label: 'Products' },
  { link: '/questions', label: 'Q&A' },

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
          className={classes.link}
        >
          <MantineLogo size={28} />
        </a>

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>

        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
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
        </ScrollArea>
      </Drawer>

    </>








  );
}