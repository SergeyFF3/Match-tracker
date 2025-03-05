import { MatchType } from "../types/types";

const baseUrl = "https://app.ftoyd.com/fronttemp-service";

export const getMatches = async (): Promise<MatchType[]> => {
  const response = await fetch(`${baseUrl}/fronttemp`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка: не удалось загрузить информацию");
  }

  const result = await response.json();
  return result.data.matches as MatchType[];
};
