import { useEffect, useState } from "react";
export function useStored(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? initial;
    } catch {
      return initial;
    }
  });
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value],
  );
  return [value, setValue];
}
export function useMedia() {
  return useStored("mg_media_v2", []);
}
import { seedFaculty, seedNews } from "../data/siteData";
export function useFaculty() {
  return useStored("mg_faculty_v2", seedFaculty);
}
export function useNews() {
  return useStored("mg_news_v2", seedNews);
}
