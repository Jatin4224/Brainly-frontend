import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModal } from "./components/ui/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";

import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <main className="p-4">
        <CreateContentModal open={true} />
        <section className="flex justify-end gap-4">
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
        </section>
        <div className="flex gap-6">
          <Card
            title="First tweet"
            type="twitter"
            link="https://x.com/YTCodeAntonio/status/1912122933608165869"
          />
          <Card
            title="First video"
            type="youtube"
            link="https://www.youtube.com/watch?v=BhUlEcdh22U"
          />
        </div>
      </main>
    </>
  );
}

export default App;
