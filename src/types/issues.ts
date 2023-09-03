interface User {
  login: string;
}

export interface Issue {
  number: number;
  title: string;
  user: User;
  created_at: string;
  comments: number;
}
