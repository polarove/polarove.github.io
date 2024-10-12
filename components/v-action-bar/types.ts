// *********** action bar

export declare type Justify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";
export declare type Align = "top" | "center" | "end";
export interface ActionBarProps {
  justify?: Justify;
  items?: Align;
}

// ------------ action bar item
export interface ActionBarItemProps {
  icon?: string;
  text?: string;
  size?: string;
  href?: string;
  target?: "_blank" | "_self";
  disabled?: boolean;
}
