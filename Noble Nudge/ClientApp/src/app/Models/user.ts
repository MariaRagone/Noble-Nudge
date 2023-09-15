import { Nobe } from "./nobe";

export interface Users {
    userId: number;
    googleId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    age?: number | null;
    zipCode?: string | null;
    points?: number | null;
    nobes: Nobe[];
  }