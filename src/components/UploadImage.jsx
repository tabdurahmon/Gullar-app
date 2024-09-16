import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { buttonVariants, Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useState, useRef } from "react";
import { uploadImage } from "../request";
import { toast } from "sonner";
import { allowImageSize } from "../lib/my-utils";

export default function UploadImage() {
  const [value, setValue] = useState("");
  const urlInput = useRef(null);

  const handleUploadImage = (image, type = "local") => {
    if (type === "url") {
      setValue(image);
    } else {
      if (image.size >= allowImageSize) {
        toast.error("Rasim hajimi 5mbdan kichik bo'lishi kerak!");
      } else {
        toast.loading("Rasim yuklanmoqda...");
        uploadImage(image)
          .then((res) => {
            setValue(res);
          })
          .catch(({ message }) => {
            toast.error(message);
          });
      }
    }
  };

  return (
    <div className="mb-10 w-full px-1">
      <input
        value={value}
        onChange={setValue}
        type="url"
        name="imageUrl"
        className="sr-only"
      />

      <Label className="ml-2">Rasim Yuklang..</Label>
      <Tabs defaultValue="local" className="mb-2 w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="local">
            Local
          </TabsTrigger>
          <TabsTrigger className="w-full" value="url">
            URL
          </TabsTrigger>
          <TabsTrigger className="w-full" value="default">
            Default
          </TabsTrigger>
        </TabsList>
        <TabsContent value="local">
          <Label>
            <span
              className={`w-full py-1 ${buttonVariants({ variant: "outline" })}`}
            >
              {!value ? <PlusCircleIcon /> : <UpdateIcon />}
            </span>
            <Input
              onChange={({ target: { files } }) => handleUploadImage(files[0])}
              accept="image/*"
              className="sr-only"
              type="file"
            />
          </Label>
        </TabsContent>
        <TabsContent value="url">
          <Label htmlFor="url" className="mb-1 ml-2">
            Havola*
          </Label>
          <div className="flex items-center gap-5">
            <Input
              ref={urlInput}
              id="url"
              placeholder=" Rasimni havolasini kiriting"
              className="w-full"
              type="url"
            />

            <Button
              onClick={() => handleUploadImage(urlInput?.current.value, "url")}
              type="button"
            >
              {!value ? <PlusCircleIcon /> : <UpdateIcon />}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="default">
          <Button
            className="w-full"
            onClick={() =>
              setValue(
                "https://c02.purpledshub.com/uploads/sites/40/2023/08/JI230816Cosmos220-6d9254f-edited-scaled.jpg",
              )
            }
          >
            <PlusCircleIcon />{" "}
          </Button>
        </TabsContent>
      </Tabs>
      {value && (
        <img
          onLoad={() => {
            toast.success("Rasm muvaffaqiyatli yuklandi");
            toast.dismiss();
          }}
          className="h-52 w-full rounded-xl bg-top object-cover"
          src={value}
          value={value}
          name="imageUrl"
          alt="gul rasmi"
        />
      )}
    </div>
  );
}
