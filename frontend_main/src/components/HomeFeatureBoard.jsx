import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './HomeFeatureBoard.module.css';
  
  const mockdata = [
    {
      title: 'Branding & Design',
      description:
        "We create tailor-made websites that reflect your brand's unique identity, ensuring a one-of-a-kind online presence",
      icon: IconGauge,
    },
    {
      title: 'Secure & Private',
      description:
        'We implement robust security measures to protect your website and ensure your data remains safe and confidential',
      icon: IconUser,
    },
    {
      title: 'Mobile Optimization',
      description:
        ' Every website we design is fully responsive, offering a seamless experience across all devices, from smartphones to desktops',
      icon: IconCookie,
    },
  ];
  
  export function HomeFeatureBoard() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="xl" py="xl" >
        <Group justify="center">
          <Badge variant="filled" size="lg">
            cutting-edge Development
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Modern Web Solutions for a Professional Edge
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Our innovative web solutions are designed to give your business a competitive advantage, 
          combining sleek design with advanced functionality for a truly professional online presence.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }