import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Paws to Love!</h1>
      <Pet name="Smart" animal="Dog" breed="Boerboel" />
      <Pet name="Point" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Bird" breed="Havenese" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
