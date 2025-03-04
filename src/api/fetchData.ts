import { MatchType } from "../types/types";

const baseUrl = "https://app.ftoyd.com/fronttemp-service";

export const getMatches = async (): Promise<MatchType[]> => {
  try {
    const response = await fetch(`${baseUrl}/fronttemp`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("Ошибка загрузки матчей", response.statusText);
      return [];
    }

    const result = await response.json();
    return result.data.matches as MatchType[];
  } catch {
    console.log("Ошибка: не удалось загрузить информацию");
    return [];
  }
};
