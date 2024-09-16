export const getFormData = (form) => {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) obj[key] = value;

  return obj;
};

export const collectItem = (array, item) => {
  const result = [];
  for (const obj of array) {
    result.push(obj[item]);
  }
  return Array.from(new Set(result));
};

export const validation = (obj) => {
  let checker = false;
  let errorMessage = "";
  const errors = {
    imageUrl: "Rasim yuklanmadi",
    name: "Rasim nomi kiritilmadi",
    price: "Narx kiritilmadi",
    summary: "Izoh kiritilmadi",
    smell: "Hid kiritilmadi",
    category: "Turkum tanlanmadi",
    country: "Hudud tanlanmadi",
    lifetime: "Gullash vaqti kiritilmadi",
    color: "Rang tanlanmadi",
  };

  for (const key in obj) {
    if (obj[key].trim() === "") {
      checker = true;
      errorMessage = errors[key];
    }
  }
  return { checker, errorMessage };
};

export const BASE_URL = "https://json-api.uz/api/project/Flowers-11";

export const allowImageSize = 5_242_880;
export const periods = ["kun", "hafta"];
export const summaryLimit = 200;
export const limitSkip = 5;
