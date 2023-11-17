import { User } from "oidc-client";
import { Users } from "./user";

export interface Nobe {
    nobeId: number;
    nobeName?: string ;
    category?: string ;
    points: number ;
    icon: string;
    users: Users[];
    description: string;
  }
  