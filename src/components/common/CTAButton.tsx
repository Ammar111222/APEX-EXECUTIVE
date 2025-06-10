import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "dark";
  icon?: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  variant = "primary",
  icon,
  className = "",
  isExternal = false,
}) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-royal-gold hover:bg-warm-gold text-jet-black shadow-md hover:shadow-lg",
    secondary: "bg-deep-charcoal hover:bg-jet-black text-soft-cream shadow-md hover:shadow-lg border border-royal-gold",
    outline: "bg-transparent hover:bg-royal-gold/10 text-royal-gold border-2 border-royal-gold",
    gradient: "bg-gradient-to-r from-jet-black via-deep-charcoal to-royal-gold text-soft-cream hover:from-royal-gold hover:via-deep-charcoal hover:to-jet-black transition-all duration-500 shadow-md hover:shadow-lg",
    dark: "bg-jet-black hover:bg-deep-charcoal text-soft-cream border border-royal-gold shadow-md hover:shadow-lg"
  };
  
  const buttonContent = (
    <>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (isExternal) {
    return (
      <Button
        asChild
        className={cn(baseClasses, variantClasses[variant], className)}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      </Button>
    );
  }
  
  return (
    <Button
      asChild
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      <Link to={href}>
        {buttonContent}
      </Link>
    </Button>
  );
};

export default CTAButton;
