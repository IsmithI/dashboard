import { ReactNode } from "react";

export interface IWidget {
  id: string;
  component: ReactNode;
  grow?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | boolean;
}