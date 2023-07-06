import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductType } from "@/types/product";
import { NavLink } from "react-router-dom";

type CardProps = ProductType & React.ComponentProps<typeof Card>;

export function ProductCard({
  id,
  title,
  image,
  className,
  ...props
}: CardProps) {
  return (
    <NavLink
      className={cn("hover:ring-2", "focus:ring-4", "ring-gray-500 rounded-lg")}
      to={`/product/${id}`}
    >
      <Card
        key={id}
        className={cn("w-full h-[443px] overflow-hidden relative", className)}
        {...props}
      >
        <CardHeader className="h-24">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <img width="100%" height="140px" alt={title} src={image} />
        </CardContent>
        <CardFooter className="bg-white border-t pt-6 gap-x-4 w-full absolute left-0 bottom-0">
          <Button size="lg" className="w-full">
            Add To Cart
          </Button>
        </CardFooter>
      </Card>
    </NavLink>
  );
}
