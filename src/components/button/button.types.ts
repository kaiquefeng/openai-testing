import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";

export type ButtonProps = {
  icon?: ReactElement<SVGElement>;

  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;
