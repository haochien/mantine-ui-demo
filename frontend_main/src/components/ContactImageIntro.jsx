import {useState, useEffect} from 'react';
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Box, rem, Container, Paper, useMantineTheme
} from '@mantine/core';

import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

import classes from './ContactImageIntro.module.css';
import { useForm, ValidationError } from '@formspree/react';



const iconData = [
  { title: 'Email', description: 'haochien886@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+49 (174) 620 9085', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '9 a.m. – 9 p.m.', icon: IconSun },
];

export function ContactImageIntro() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const [state, handleSubmit] = useForm("mvgplbln");
  //const [state, setState] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
    //if (state) {
      //setState(false)
      notifications.show({
        color: 'green',
        position: 'top-center',
        autoClose: 7000,
        title: 'You message has been sent!',
        message: 'We will contact you within 24 hour',
        classNames: classes,
    })
  }
  }, [state]);



  const icons = iconData.map((item, index) => (
    <Group mt="xl" key={index}>
      <Box mr="md">
        <ActionIcon size={28}  variant="transparent">
          <item.icon style={{ width: rem(24), height: rem(24) }} />
        </ActionIcon>
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {item.title}
        </Text>
        <Text className={classes.description}>{item.description}</Text>
      </div>
    </Group>
  ));

  return (
    <Paper >
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={mobile? 10 : 50} >
        <div className={classes.contacts}>
          <Title className={classes.title}>Our Info</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>


          {icons}


        </div>
        
        <form className={classes.form} onSubmit={handleSubmit}>
          {!mobile && <Text fz="lg" fw={700} className={classes.formTitle}>
            Get in touch
          </Text>}

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput name="name" label="Your name" placeholder="Your name" />
              <TextInput name="email" label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>

            <TextInput name="subject" mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              name="message"
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control} disabled={state.submitting} loading={state.submitting} >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </SimpleGrid>
    </div>
    </Paper>
  );
}