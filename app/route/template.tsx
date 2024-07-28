import { Boundary } from "@/ui/boundary";
import React from "react";

function template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}

export default template;
