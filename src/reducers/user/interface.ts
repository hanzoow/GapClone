export interface SuccessAction<T> {
    type: string,
    payload: T,
}

export interface userLoginWithEmail {
    email: string;
    password: string;
}

export interface userRegisterWithEmail {
    email:string,
    password:string;
}

export type interestedIn = {
    name?:string,
}

export type university = {
    abbreviation?:string,
    name?:string,
}

export type campus = {
    name?: string,
}

export type faculty = {
    name?:string,
}

export interface userData{
    email:string,
    avatarURL?:string,
    firstName?:string,
    lastName?:string,
    university?:Array<university>,
    campus?:Array<campus>,
    faculty?:Array<faculty>,
    interestedIn?: Array<interestedIn>,
}

