// export interface Nobe {
//     nobeId: number;
//     nobeName?: string | null;
//     category?: string | null;
//     points?: number | null;
//     icon: string;
//   }
  
//   export interface Users {
//     userId: number;
//     googleId?: string | null;
//     firstName?: string | null;
//     lastName?: string | null;
//     age?: number | null;
//     zipCode?: string | null;
//     points?: number | null;
//     nobes: Nobe[];
//   }

export interface UserNobe {
    googleID: string;
    nobeID: string;
}