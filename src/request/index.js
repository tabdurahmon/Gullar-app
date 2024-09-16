import { BASE_URL } from "../lib/my-utils/index";

export const refreshToken = async (token) => {
  const res = await fetch(BASE_URL + "/auth/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: token }),
  });

  if (res.status === 200 || res.status === 201) {
    return await res.json();
  } else if (res.status == 403) {
    throw new Error(403);
  } else {
    throw new Error("Nimadir hatolik bo'ldi");
  }
};

export const login = async (data) => {
  const res = await fetch(BASE_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200 || res.status === 201) {
    return await res.json();
  } else if (res.status === 400) {
    throw new Error("Login yoki Parol hato kiritildi");
  } else {
    throw new Error("Nimadir hatolik bo'ldi");
  }
};

export const getFlowers = async (token) => {
  const res = await fetch(BASE_URL + "/Flowers", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200 || res.status === 201) {
    return await res.json();
  } else if (res.status == 403) {
    throw new Error(403);
  } else {
    throw new Error("Nimadir hatolik bo'ldi");
  }
};

export async function uploadImage(image) {
  const formData = new FormData();
  FormData.append("file", image);
  const res = await fetch(BASE_URL + "/upload", {
    method: "POST",
    body: formData,
  });
  if (res.status === 400)
    throw Error("Rasm xajmi 5mbdan jop bolishi mumkin emas");

  if (res.status === 200 || res.status === 201) return res.text();
  else throw new Error("Nimadur xatolik bo'ldi");
}
