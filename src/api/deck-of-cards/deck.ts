const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

type Deck = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export async function newDeck(): Promise<Deck | null> {
  try {
    const response = await fetch(API_URL);
    const data: Deck = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching new deck:', error);
    return null;
  }
}
