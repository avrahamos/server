export interface LoginDto {
  userName: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  isAdmin: boolean;
}
