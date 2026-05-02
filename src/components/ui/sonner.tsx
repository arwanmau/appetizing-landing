<<<<<<< HEAD
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
=======
import { Toaster as Sonner } from "sonner";
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
<<<<<<< HEAD
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
=======
  return (
    <Sonner
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

<<<<<<< HEAD
export { Toaster, toast };
=======
export { Toaster };
>>>>>>> 19c33f3c2723ce9066763c84e3ed774b6b7e4d95
