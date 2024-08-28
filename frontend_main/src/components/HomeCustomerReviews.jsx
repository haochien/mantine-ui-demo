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
      title: "Exceptional Design and Support",
      review:
        'Working with Hao Web was a game-changer for our business. The custom website they designed is not only visually stunning but also highly functional. Their ongoing support and quick response to any issues have been fantastic. Highly recommend their services!',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    },
    {
      name: "Hao Timmy",
      date: "2023-OCT-13",
      title: "Professional and Efficient Service",
      review:
        'We were impressed by the professionalism and efficiency of Hao Web. From the initial consultation to the final launch, their team delivered a modern and user-friendly website that perfectly represents our brand. Their expertise in SEO also boosted our online visibility significantly.',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    },
    {
      name: "Rainer Alt",
      date: "2024-JAN-08",
      title: "Outstanding E-commerce Platform",
      review:
        'The e-commerce solution provided by Hao Web exceeded our expectations. The integration was seamless, and the site’s performance has greatly improved. We’ve seen a noticeable increase in sales and customer engagement. Their attention to detail and support have been top-notch.',
      avatarUrl: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    },
    {
      name: "Jackson Michael",
      date: "2024-FEB-23",
      title: "Top-Notch Web Design Expertise",
      review:
        'I’m thrilled with the website [Your Company Name] created for us. The modern design and responsive features have received rave reviews from our clients. The team’s knowledge and dedication were evident throughout the project. I’m excited to continue working with them for future updates.',
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
              <Text fz="sm">{feature.name}</Text>
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

        <Container size="xl" py="xl">
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