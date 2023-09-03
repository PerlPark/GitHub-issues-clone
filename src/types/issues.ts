import { User } from "./user";

export interface Issue {
  number: number;
  title: string;
  user: User;
  created_at: string;
  comments: number;
}
