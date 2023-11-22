export interface IIcons {
  small : string;
  large : string;
  medium : string;
  default : string;
}

export interface IType {
  name : string;
  title : string;
  icons : IIcons
}

export interface IName {
  name : "japan" 
  | "usa" 
  | "ussr" 
  | "germany" 
  | "uk" 
  | "france" 
  | "pan_asia" 
  | "italy" 
  | "commonwealth" 
  | "pan_america" 
  | "europe" 
  | "netherlands" 
  | "spain";
}

export interface ITitle {
    name : "Japan" 
    | "U.S.A." 
    | "U.S.S.R." 
    | "Germany" 
    | "U.K." 
    | "France" 
    | "Pan-Asia" 
    | "Italy" 
    | "Commonwealth" 
    | "Pan-America" 
    | "Europe" 
    | "The Netherlands" 
    | "Spain";
  }

export interface INation {
  name : IName;
  title : ITitle;
  color : string;
  icons : IIcons;
}

export interface IVehicles {
  title: string;
  nation: INation;
  description: string;
  icons : IIcons;
  level : number;
  type: IType;
}

export type KorabliApiType = {
  vehicles : IVehicles[]
};

export type Props = {
  title : string;
  flag? : string;
  colorName? : string;
  img : string; 
  nationIconSm : string; 
  description : string; 
  level : number;
};

export interface IFilterElement {
  nation:{title: string}
}

export interface IMapElement {
  type:{title: string}
}

export interface IFilterTwoElements {
  nation:{title: string};
  type:{title: string};
}


