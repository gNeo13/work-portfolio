type Order = {
  id: number;
  text: string;
  done: boolean;
};

const initialOrders: Order[] = [
  { id: 1, text: "2x Beef Rendang Tacos — Aunty Lily", done: false },
  { id: 2, text: "1x Hinava Ceviche — WhatsApp order", done: false },
];

function App() {
  return (
    <main>
      <h1>Kinabalu Kitchen — Orders</h1>
      <ul>
        {initialOrders.map((order) => (
          <li key={order.id}>{order.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
