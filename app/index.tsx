import { Stack, Link, router } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        {/* <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button className="rounded-lg" title="Show Details" />
        </Link> */}

        <Button onPress={() => router.push('/tasks')} className="my-3 rounded-lg" title="Tasks" />
      </Container>
    </>
  );
}
