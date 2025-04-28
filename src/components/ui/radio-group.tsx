import * as React from "react";

interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = "", onValueChange, value, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onValueChange) {
        onValueChange(event.target.value);
      }
    };

    return (
      <div 
        ref={ref}
        className={`grid gap-2 ${className}`} 
        {...props} 
        onChange={handleChange as any} 
      />
    );
  }
);
RadioGroup.displayName = "RadioGroup";

interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className = "", value, id, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="radio"
        className={`h-4 w-4 text-primary border-primary rounded-full focus:ring-primary ${className}`}
        value={value}
        id={id}
        {...props}
      />
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
