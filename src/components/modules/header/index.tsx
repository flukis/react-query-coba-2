import { capitalizeFirstLetter, cn } from "@/lib/utils";
import Link from "@/components/ui/link";
import { useFetchAllCategories } from "@/hooks/data/useCategories";
import { Skeleton } from "@/components/ui/skeleton";

function HeaderModule() {
  const { data, isLoading } = useFetchAllCategories();
  return isLoading ? (
    <div className="p-6 flex justify-center items-center">
      <Skeleton className="w-full h-10" />
    </div>
  ) : (
    <header className={cn("flex items-center justify-between p-6")}>
      <h1 className={cn("font-bold leading-6")}>Simple Ecommerce</h1>
      <nav className={cn("flex gap-x-3")}>
        {(data || []).map((d: string) => (
          <Link key={d} to={`/${d}`}>
            {capitalizeFirstLetter(d)}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default HeaderModule;
