
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  description?: string;  
}

export const Modal = ({ 
  open, 
  onOpenChange, 
  trigger, 
  children, 
  title, 
  description 
}: ModalProps) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs animate-in fade-in-0 z-[50]" />
          <PopoverContent
            className="w-[500px] p-4 -translate-x-[100%] popoverContent shadow-lg border rounded-lg"
            side="top"
            align="end"
            sideOffset={5}
          >
            <div className="grid gap-4">
              {(title || description) && (
                <div className="space-y-2">
                  {title && <h4 className="font-medium leading-none">{title}</h4>}
                  {description && (
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  )}
                </div>
              )}
              {children}
            </div>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
} 