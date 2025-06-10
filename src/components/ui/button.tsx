import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-royal-gold text-jet-black hover:bg-warm-gold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-royal-gold bg-transparent text-royal-gold hover:bg-royal-gold/10",
        secondary:
          "bg-deep-charcoal text-soft-cream hover:bg-muted-gray border-royal-gold border",
        ghost: "hover:bg-royal-gold/10 hover:text-royal-gold",
        link: "text-royal-gold underline-offset-4 hover:underline hover:text-warm-gold",
        gold: "bg-royal-gold text-jet-black hover:bg-warm-gold transition-colors",
        dark: "bg-jet-black text-soft-cream border border-royal-gold hover:bg-deep-charcoal transition-colors",
        gradient: "bg-gradient-to-r from-jet-black via-deep-charcoal to-royal-gold text-soft-cream hover:from-royal-gold hover:via-deep-charcoal hover:to-jet-black transition-all duration-500",
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
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
