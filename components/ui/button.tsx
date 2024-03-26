import { cn } from "@/lib/utils";
import { forwardRef } from "react";

//tworzymy własny komponent button

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
        w-auto
        rounded-full
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
        `,
          className
          //umozliwiamy nadpisywanie powyzszych klas
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
