import { Blockquote, Container } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function HomeQuote() {
  const icon = <IconInfoCircle />;
  return (
    <Container fluid bg="var(--mantine-color-black-light)">

        <Container size="lg" py="xl">
            <Blockquote color="blue" cite="– Forrest Gump" icon={icon} mt="xl">
            You don't need to fully understand the details behind the technology.
            You just need to find a reliable expert to utilise correct technology for your idea.
            </Blockquote>
        </Container>

    </Container>
  );
}