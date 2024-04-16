import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export const IconButton = ({ transparent, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={
        transparent
          ? "border-white/10 border rounded-md p-1.5 bg-black/20"
          : "border rounded-md border-white/10 bg-white/10 p-1.5"
      }
    />
  );
};
