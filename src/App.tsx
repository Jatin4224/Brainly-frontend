import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <div className="gap-2 flex mt-2">
        <Button variant="primary" text={"share"} size="lg" />
        <Button variant="secondary" text={"Add Content"} size="md" />
      </div>
    </>
  );
}

export default App;
