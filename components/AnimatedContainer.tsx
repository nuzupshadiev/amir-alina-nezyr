import type { PropsWithChildren } from "react";

export function AnimatedContainer({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={className} data-reveal="0.18">
      {children}
    </div>
  );
}
