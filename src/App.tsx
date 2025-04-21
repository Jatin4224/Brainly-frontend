import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/plusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="gap-2 flex mt-2">
        <Button
          startIcon={<PlusIcon size={"lg"} />}
          variant="primary"
          text={"Add Content"}
          size="lg"
        />
        <Button
          startIcon={<ShareIcon size={"lg"} />}
          variant="secondary"
          text={"Share"}
          size="lg"
        />
      </div>
    </>
  );
}

export default App;
