import { cn } from "@/shared/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-12 w-12",
  md: "h-20 w-20",
  lg: "h-32 w-32",
};

export function Avatar({
  src,
  alt,
  size = "lg",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-full border-2 border-[var(--primary)] bg-[var(--surface)]",
        sizes[size],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-[var(--primary)]">
          ?
        </div>
      )}
    </div>
  );
}