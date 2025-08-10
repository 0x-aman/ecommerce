import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-8">
      <div>
        <Button variant="elevated">Yo, button!</Button>
      </div>
      <div>
        <Input placeholder="yo this is a input" />
      </div> 
      <div>
        <Textarea placeholder="yo this is a textarea" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
