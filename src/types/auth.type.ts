import { ResponseApi } from "../types/utils.type";
import { User } from "../types/user.type";


export type AuthResponse = ResponseApi<{
     access_token: string;
     expires: string;
     user: User
}>;

