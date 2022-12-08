// Modela as informações dos usuários
export interface UserModel{
    "userName": string,
    "userEmail": string
}

export interface UserArrayModel{
    single_user: UserModel
}