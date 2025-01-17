const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export async function fetchTickets() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return { tickets: [], users: [] };
  }
}
