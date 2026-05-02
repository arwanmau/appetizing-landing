import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
<<<<<<< HEAD
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
=======
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
}

export { Skeleton };
