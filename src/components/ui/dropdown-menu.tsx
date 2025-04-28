"use client";


import React, { useState, useRef, useEffect, cloneElement, ReactElement, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings } from "lucide-react";

// Types for dropdown context
interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// DropdownMenu Component
export function DropdownMenu({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return cloneElement(child, { isOpen, setIsOpen } as DropdownContextProps);
        }
        return child;
      })}
    </div>
  );
}

// DropdownMenuTrigger Component
interface DropdownMenuTriggerProps extends DropdownContextProps {
  asChild?: boolean;
  children: ReactElement;
}

export function DropdownMenuTrigger({ 
  asChild, 
  children,
  isOpen,
  setIsOpen
}: DropdownMenuTriggerProps) {
  const triggerProps = {
    onClick: () => setIsOpen(!isOpen),
    "aria-expanded": isOpen,
    "aria-haspopup": "menu"
  };

  if (asChild) {
    return cloneElement(children, {
      ...triggerProps,
      ...children.props
    });
  }
  
  return (
    <button {...triggerProps}>
      {children}
    </button>
  );
}

// DropdownMenuContent Component
interface DropdownMenuContentProps extends DropdownContextProps {
  align?: "start" | "center" | "end";
  children: ReactNode;
}

export function DropdownMenuContent({ 
  align = "end", 
  children,
  isOpen
}: DropdownMenuContentProps) {
  if (!isOpen) return null;

  const alignmentClasses = {
    start: "left-0",
    center: "left-1/2 transform -translate-x-1/2",
    end: "right-0"
  };

  return (
    <div
      className={`absolute ${alignmentClasses[align]} mt-2 z-50 min-w-[12rem] rounded-md border bg-white shadow-md p-1`}
      role="menu"
    >
      {children}
    </div>
  );
}

// DropdownMenuItem Component
interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export function DropdownMenuItem({ 
  children, 
  onClick 
}: DropdownMenuItemProps) {
  return (
    <div 
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100"
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// DropdownMenuLabel Component
export function DropdownMenuLabel({ children }: { children: ReactNode }) {
  return (
    <div className="px-2 py-1.5 text-sm font-semibold">
      {children}
    </div>
  );
}

// DropdownMenuSeparator Component
export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-gray-200" />;
}
