import { User } from "oidc-client";
import { Users } from "./user";

export interface Nobe {
    nobeId: number;
    nobeName?: string | null;
    category?: string | null;
    points?: number | null;
    users: Users[];
  }
  