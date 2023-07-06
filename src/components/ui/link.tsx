import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, to, variant, size, ...props }, ref) => {
    const style = ({ isActive }: { isActive: boolean }) => ({
      fontWeight: isActive ? "bold" : "normal",
    });
    return (
      <NavLink
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        to={to}
        style={style}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export default Link;
