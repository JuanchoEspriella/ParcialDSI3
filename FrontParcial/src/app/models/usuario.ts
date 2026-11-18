export interface usuario {
  id?: number;
  username: string;
  password?: string;
  role?: string;
}

export interface respuestalogin {
  token: string;
}
