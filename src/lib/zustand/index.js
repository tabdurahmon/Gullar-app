import { create } from "zustand";

export const useAppStore = create((set) => ({
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  flowers: null,
  addItemModal: false,
  setAdmin: (admin) =>
    set(() => {
      if (admin) {
        localStorage.setItem("admin", JSON.stringify(admin));
      } else {
        localStorage.removeItem("admin");
      }
      return { admin };
    }),
  setFlowers: (flowers) =>
    set(() => {
      return { flowers };
    }),
  setAddItemModal: () =>
    set((state) => ({ addItemModal: !state.addItemModal })),
}));
