export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  secretToken: string;
  refreshToken?: string;
  email:string;
};
