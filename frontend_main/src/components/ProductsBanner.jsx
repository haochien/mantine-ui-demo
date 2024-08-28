import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Container } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './ProductsBanner.module.css';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Consulting',
    description: 'understand your business and goals to develop a strategic plan that aligns your website with your objectives',
  },
  {
    icon: IconFileCode,
    title: 'Branding',
    description: 'create a cohesive brand identity, ensuring your logo, colors, and messaging resonate with your audience',
  },
  {
    icon: IconCircleDotted,
    title: 'Modern Design',
    description:
      'Design responsive, user-friendly websites that reflect your brand and engage visitors across all devices',
  },
  {
    icon: IconFlame,
    title: 'Creation and Supporting',
    description:
      'build secure, high-performance websites and provide ongoing maintenance to keep them updated and optimized',
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
              Complete Web Solutions: Consult, Brand, Design, Create
            </Title>
            <Text color={"var(--mantine-color-gray-4)"}>
              we go beyond traditional web design to offer Complete Web Solutions that encompass every aspect of your online presence
              and ensures that your website functions seamlessly to support your business goals
            </Text>

            <Button
              variant="gradient"
              gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
              size="lg"
              radius="md"
              mt="xl"
              onClick={() => {
                const pd1Element = document.getElementById('pd1');
                if (pd1Element) {
                  pd1Element.scrollIntoView({ behavior: 'smooth' })
                }
                
              }}
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