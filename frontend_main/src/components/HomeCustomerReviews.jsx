import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Divider,
    useMantineTheme,
    Avatar,
  } from '@mantine/core';

  import classes from './HomeCustomerReviews.module.css';

  const mockdata = [
    {
      name: "Jacob Warnhalter",
      date: "2023-JUN-20",
      title: "You are the best!!",
      review:
        'I use Heroku to host my Node.js application, but MongoDB add-on appears to be too expensive. I consider switching to Digital Ocean VPS to save some cash.',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    },
    {
      name: "Hao Timmy",
      date: "2023-OCT-13",
      title: "Thank you so much",
      review:
        'This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    },
    {
      name: "Rainer Alt",
      date: "2024-JAN-08",
      title: "Super good part",
      review:
        'After 4 scooters, I finally found one that is really good. The suspension in particular is a poem. The performance is also very good. With my 110 kg smaller climbs up to 20%, no problem at all. But the E horn. Who came up with such nonsense? It sounds like a smoke detector. So that needs to be changed. I just ordered a normal bicycle blade. But still 100% recommended',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    },
    {
      name: "Rainer Alt",
      date: "2024-FEB-23",
      title: "Thank you so much",
      review:
        'Unfortunately my order of the Segway-Ninebot MAX G2 D was canceled here, but I bought it somewhere else in the exact same version (2023). The e-scooter is absolutely great! With a maximum speed of 20 km/h and an impressive range of 70 km, it is perfect for long trips. The road approval for adults makes it particularly practical for everyday use. The quality and performance of this e-scooter are outstanding, and I highly recommend it to anyone looking for a reliable and powerful e-scooter!',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    },

  ]; 



  export function HomeCustomerReviews() {
    const theme = useMantineTheme();

    const features = mockdata.map((feature) => (
      <Card key={feature.name} shadow="md" radius="md" className={classes.card} padding="xl">
        
        <div className={classes.cardTitle}>
          <Group >
            <Avatar
              src={feature.avatarUrl}
              alt={feature.name}
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                {feature.date}
              </Text>
            </div>
          </Group>
        </div>

        <Divider my="md" />

        <Text className={classes.title}>
          {feature.title}
        </Text>

        <Text className={classes.body}>
          {feature.review}
        </Text>
      </Card>
    ));

    return (
      <Container fluid bg="var(--mantine-color-black-light)">

        <Container size="lg" py="xl">
          <Title order={2} className={classes.header} ta="center" mt="sm">
            WHAT PEOPLE SAY
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
            {features}
          </SimpleGrid>
        </Container>

      </Container>
    )
  }