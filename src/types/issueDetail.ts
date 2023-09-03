import { User } from "./user";

export interface IssueDetail {
  number: number;
  title: string;
  user: User;
  comments: number;
  body: string;
}
