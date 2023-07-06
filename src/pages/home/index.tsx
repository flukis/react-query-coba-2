import { ProductCard } from "@/components/modules/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchAllProducts } from "@/hooks/data/useProducts";
import { ProductType } from "@/types/product";

function HomePage() {
  const { data, isLoading } = useFetchAllProducts(15);
  return isLoading ? (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
      <div className="rounded-lg">
        <Skeleton className="w-full h-16" />
        <Skeleton className="w-full h-64" />
        <Skeleton className="w-full h-20" />
      </div>
    </div>
  ) : (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {(data || []).map((p: ProductType) => (
        <ProductCard {...p} />
      ))}
    </div>
  );
}

export default HomePage;
