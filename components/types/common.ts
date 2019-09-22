// export type ThemeType = {
//     red: string,
//     black: string,
//     grey: string,
//     lightgrey: string,
//     offwhite: string,
//     white: string,
//     bluegreen: string,
//     pink: string,
//     dullbluegreen: string,
//     maxWidth: string,
//     boxShadow: string,
//     border: string,
//     textShadow: ({x, y, blur}:{x?:string, y?:string, blur?: string}) => string,
    
// }

export type ThemeType  = {

    primary_background: string,
      primary_foreground: string,
      secondary_background: string,
      header_background: string,
      primary_heading_color: string,
      secondary_heading_color: string,
      light: string,
      dark: string,
      maxWidth: string,
      boxShadow: string,
      border: string,
}


export type Post = {
    title: string;
    createdAt: string;
    subtitle: string;
    image: string | null;
    url: string;
  };