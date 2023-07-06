import { categoryLists } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export function useFetchAllCategories() {
  return useQuery(["categories"], fetchAllCategories);
}

async function fetchAllCategories() {
  const res = await fetch(categoryLists);
  return res.json();
}
