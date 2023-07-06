import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductDetailByID } from "@/hooks/data/useProductDetail";
import { USDollar } from "@/lib/utils";
import { useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductDetailByID(Number(id));
  return isLoading ? (
    <div className="p-6 flex flex-col gap-8">
      <Skeleton className="w-1/2 h-16" />
      <Skeleton className="w-72 h-96" />
      <Skeleton className="w-1/2 h-48" />
    </div>
  ) : (
    <div>
      <div className="px-6">
        <Button variant="outline" className="flex gap-3 text-xl font-semibold">
          <MoveLeft /> Back
        </Button>
      </div>
      <div className="p-6 flex sm:flex-row gap-16 flex-col">
        <div className="flex-shrink-0 w-full sm:w-1/2">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="h-[400px] my-12 w-full rounded-lg overflow-hidden">
            <img
              alt={data.title}
              className="w-auto h-full"
              src={data.image}
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg font-semibold mb-4">Description:</p>
            <p className="text-gray-600 text-base max-w-screen-sm">
              {data.description}
            </p>
          </div>
          <div className="text-blue-800 font-mono sm:text-5xl text-3xl py-8 font-bold flex justify-start">
            <span className="text-gray-600 text-xl pr-4 font-normal">
              price:{" "}
            </span>
            {USDollar(data.price)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
