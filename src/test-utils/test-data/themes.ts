import { TTheme } from "../../types/theme.type";

export const themesData: TTheme[] = [
  {
    id: 1,
    name: "Test theme 1",
  },
  {
    id: 2,
    name: "Test theme 2",
  },
  {
    id: 3,
    name: "Test theme 3",
  },
];

export const themesDataMapped: Record<string, string> = {
  "1": "Test theme 1",
  "2": "Test theme 2",
  "3": "Test theme 3",
};
