import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { summaryLimit } from "../lib/my-utils";

export default function Summary() {
  const [value, setValue] = useState("");

  function writer(e) {
    if (!(e.target.value.length > summaryLimit)) {
      setValue(e.target.value);
    }
    console.log(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <div className="mb-1 grid w-full gap-1.5">
        <Label htmlFor="summary">Gul haqida</Label>
        <Textarea
          value={value}
          onChange={writer}
          placeholder="Gul haqida ma'lumot kiriting..."
          id="summary"
          name="summary"
        />
      </div>
      <span className="mb-1 grid w-full gap-1.5">
        <span className="ml-auto block text-muted-foreground">
          {value.length} / {summaryLimit}
        </span>
      </span>
    </div>
  );
}
