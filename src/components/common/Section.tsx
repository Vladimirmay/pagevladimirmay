import { ReactNode, RefObject } from "react";
import cn from "clsx";

import "./Section.scss";
import { TRoute } from "#utils/types";
import Copyright from "./Copyright";
import Pagination from "./Pagination";

interface ISectionProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sectionRef?: RefObject<any>;
  className?: string;
  contentClassName?: string;
  aside?: boolean;
  wide?: boolean;
  colorful?: boolean;
  prevTo?: TRoute;
  nextTo?: TRoute;
}

export default function Section({
  children,
  sectionRef,
  className,
  contentClassName,
  wide,
  colorful,
  prevTo,
  nextTo,
}: ISectionProps) {
  const isFooter = prevTo || nextTo;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "Section",
        wide && "Section_wide",
        colorful && "Section_colorful",
        className
      )}
    >
      <div
        className={cn(
          contentClassName,
          "Section-Content",
          isFooter && "Section-Content_footer"
        )}
      >
        {children}
        {isFooter && (
          <footer>
            <Pagination halfWidth={wide} prevTo={prevTo} nextTo={nextTo} />
            <Copyright />
          </footer>
        )}
      </div>
    </section>
  );
}
