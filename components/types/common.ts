export type ThemeType = {
    red: string,
    black: string,
    grey: string,
    lightgrey: string,
    offwhite: string,
    bluegreen: string,
    pink: string,
    dullbluegreen: string,
    maxWidth: string,
    boxShadow: string,
    border: string,
    textShadow: ({x, y, blur}:{x?:string, y?:string, blur?: string}) => string,
    
}
