import { useQuery } from '@tanstack/react-query';
import { fetchNewDeck } from '../api/deck-of-cards/deck';
import type { Deck } from '../api/deck-of-cards/deck';
import { Button } from '@/components/ui/button';

const Home = () => {
  const {
    data: deck,
    isLoading,
    error,
    refetch,
  } = useQuery<Deck>({
    queryKey: ['newDeck', ],
    queryFn: fetchNewDeck,
  });

  return (
    <div>
      <h1>Deck of Cards</h1>
      <Button onClick={() => refetch()}>New Deck</Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {(error as Error).message}</p>}
      <pre>{JSON.stringify(deck, null, 2)}</pre>
    </div>
  );
};

export default Home;
