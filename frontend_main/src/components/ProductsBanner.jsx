import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Container } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './ProductsBanner.module.css';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

export function ProductsBanner() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500} color={"var(--mantine-color-white)"}>
        {feature.title}
      </Text>
      <Text fz="sm" color={"var(--mantine-color-gray-4)"}>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl"  >

        <Grid gutter={80} pt={150}>
          <Grid.Col span={{ base: 12, md: 5 }} style={{ minHeight: rem(500) }}>
            <Title className={classes.title} order={2}>
              A fully featured React components library for your next project
            </Title>
            <Text color={"var(--mantine-color-gray-4)"}>
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }} style={{ minHeight: rem(500) }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>

      </Container>
    </div>
  );
}