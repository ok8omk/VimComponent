export type Mode = "INSERT" | "NORMAL";
export type State = {
  value: string;
  mode: Mode;
  cursorIndex: number;
};
