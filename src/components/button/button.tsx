import { forwardRef, MouseEvent, useImperativeHandle, useRef } from "react";
import { ButtonProps } from "./button.types";

export const Button = forwardRef<Partial<HTMLButtonElement>, ButtonProps>(
  ({ icon, children, onClick, disabled, ...props }, ref) => {
    const componentRef = useRef<HTMLButtonElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);

    const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onClick?.(event);
    };

    const handleDispatchOnClick = () => {
      if (componentRef.current) {
        componentRef.current.click();
      } else {
        iconRef.current?.click();
      }
    };

    const handleDispatchOnFocus = () => {
      if (componentRef.current) {
        componentRef.current.focus();
      } else {
        iconRef.current?.focus();
      }
    };

    useImperativeHandle(ref, () => ({
      click: handleDispatchOnClick,
      focus: handleDispatchOnFocus,
    }));

    return (
      <div
        onClick={handleDispatchOnClick}
        onFocusCapture={handleDispatchOnFocus}
      >
        <div aria-disabled={disabled}>
          <button
            {...props}
            disabled={disabled}
            onClick={handleOnClick}
            ref={componentRef}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }
);
