import * as React from "react";

export const Card = ({ className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`}
    {...props}
  />
);
Card.displayName = "Card";

export const CardHeader = ({ className = "", ...props }) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className || ""}`}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({ className = "", ...props }) => (
  <h3
    className={`text-lg font-semibold leading-none tracking-tight ${className || ""}`}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className = "", ...props }) => (
  <p
    className={`text-sm text-muted-foreground ${className || ""}`}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({ className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className || ""}`} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className = "", ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className || ""}`} {...props} />
);
CardFooter.displayName = "CardFooter";
