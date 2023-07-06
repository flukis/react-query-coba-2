import { productLists } from "@/api/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

export function useFetchAllProducts(limit: number) {
  return useQuery(["products", limit], fetchAllProducts);
}

async function fetchAllProducts(ctx: QueryFunctionContext) {
  const [_, limit] = ctx.queryKey;
  const limitPage =
    limit && typeof limit === "number" && (limit as number) >= 0 ? limit : 15;
  const res = await fetch(productLists(limitPage));
  return res.json();
}
