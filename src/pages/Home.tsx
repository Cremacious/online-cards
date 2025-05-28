import { useEffect, useState } from 'react';
import { newDeck } from '../api/deck-of-cards/deck';
import { Button } from '@/components/ui/button';

const Home = () => {
  type Deck = {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
  };

  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    console.log('1');
    async function fetchDeck() {
      const data: Deck | null = await newDeck();
      if (data !== null && data !== undefined) {
        setDeck(data);
        console.log(data);
      }
    }
    fetchDeck();
  }, []);

  return (
    <div>
      <h1>Deck of Cards</h1>
      <Button>Button</Button>
      <pre>{JSON.stringify(deck, null, 2)}</pre>
    </div>
  );
};

export default Home;
