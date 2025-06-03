import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-sm leading-none font-medium text-gray-700 peer-disabled:cursor-not-allowed dark:text-gray-300",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
