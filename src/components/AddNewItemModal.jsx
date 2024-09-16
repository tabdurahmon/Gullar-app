import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

import { getFormData } from "../lib/my-utils/index";
import { useAppStore } from "../lib/zustand";
import SelectCategory from "./SelectCategory";
import SelectColor from "./SelectColor";
import { SelectCountry } from "./SelectCountry";
import LifeTime from "./LifeTime";
import Summary from "./Summary";

import UploadImage from "./UploadImage";

export default function AddNewItemModal() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getFormData(e.target);
    console.log(result);
  };

  const addItemModal = useAppStore((state) => state.addItemModal);
  const setAddItemModal = useAppStore((state) => state.setAddItemModal);

  return (
    <Dialog open={addItemModal} onOpenChange={setAddItemModal}>
      <DialogContent className="max-h-[80vh] w-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Ma'lumot qo'shish
          </DialogTitle>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-3">
              <Label htmlFor="name" className="ml-2">
                Gul nomi *
              </Label>
              <Input
                id="name"
                placeholder="Gul nomini kiriting"
                name="name"
                className="w-full"
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="price" className="ml-2">
                Narxi (so'mda)*
              </Label>
              <Input
                id="price"
                placeholder="Gul narxini kiriting"
                name="price"
                type="number"
                min="0"
                className="w-full"
              />
            </div>
            <div className="mb-3 flex items-center justify-between space-x-2">
              <SelectCategory />
              <SelectColor />
            </div>
            <div className="mb-3">
              <SelectCountry />
            </div>
            <div>
              <Summary />
            </div>
            <div className="mb-3">
              <Label className="ml-2" htmlFor="smell">
                Hid*
              </Label>
              <Input
                type="text"
                id="smell"
                placeholder="Gul hidini kiriting..."
                className="w-full"
                name="smell"
              />
            </div>
            <div>
              <LifeTime />
            </div>
            <div className="w-full">
              <UploadImage />
            </div>
            <div className="mt-4 text-right">
              <Button type="submit" className="rounded-lg">
                Qo'shish
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
