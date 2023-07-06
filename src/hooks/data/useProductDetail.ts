import { productDetail } from "@/api/api";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

async function getProductByID(ctx: QueryFunctionContext) {
  const [_, id] = ctx.queryKey;
  const res = await fetch(productDetail(id as number));
  return res.json();
}

export function useGetProductDetailByID(id: number | undefined) {
  return useQuery(["products", id], getProductByID);
}
