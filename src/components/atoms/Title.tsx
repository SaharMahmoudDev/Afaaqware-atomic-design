import React from "react";
import { cn } from "@/lib/cn";
interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "main" | "primary";
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Title({
  size = "md",
  variant = "primary",
  center = false,
  className = "font-semibold",
  children,
}: Props) {
  const sizes = {
    sm: "ds-text-sm ",
    md: "ds-text-base",
    lg: "ds-text-lg ",
    xl: "ds-text-xl ",
  };

  const variants = {
    main: "ds-text-alt",
    primary: "ds-text-primary",
  };
  return (
    <h2
      className={cn(
        sizes[size],
        variants[variant],
        center ? "text-center" : "",
        className,
      )}
    >
      {children}
    </h2>
  );
}









// Resolve the conflict between the Atomic Design utilities and the Tailwind utilities
// -----------------------------------------------------------------------------------

// import React from "react";
// import { cn } from "@/lib/cn";
// interface Props {
//   size?: "sm" | "md" | "lg" | "xl";
//   variant?: "main" | "primary";
//   color?:string,
//   center?: boolean;
//   className?: string;
//   children: React.ReactNode;
// }

// export default function Title({
//   size = "md",
//   variant = "primary",
//   center = false,
//   className = "font-semibold",
//   color,
//   children,
// }: Props) {
//   const sizes = {
//     sm: "ds-text-sm ",
//     md: "ds-text-base",
//     lg: "ds-text-lg ",
//     xl: "ds-text-xl ",
//   };

//   const variants = {
//     main: "ds-text-alt",
//     primary: "ds-text-primary",
//   };
//   return (
//     <h2
//       className={cn(
//         sizes[size],
//         className,
//         center ? "text-center" : "",
//         color?color:variants[variant]
//       )}
//     >
//       {children}
//     </h2>
//   );
// }
