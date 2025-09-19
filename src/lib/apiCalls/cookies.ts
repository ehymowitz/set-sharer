import { cookies } from "next/headers";

export const setCookie = async (
  name: string,
  data: { value: string; expires_in: number }
) => {
  const cookieStore = await cookieIsNotSet(name);
  if (!cookieStore) return;
  cookieStore.set(name, data.value, { maxAge: data.expires_in });
};

export const cookieIsNotSet = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.has(name) ? false : cookieStore;
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
};
