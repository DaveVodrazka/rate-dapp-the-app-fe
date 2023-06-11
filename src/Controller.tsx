import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queries/client";
import { ReactNode, useMemo } from "react";
import { ThemeVariants, getTheme } from "./style/themes";
import { setupUser } from "./setupUser";

type Props = { children: ReactNode };

export const Controller = ({ children }: Props) => {
  const theme = useMemo(() => getTheme(ThemeVariants.dark), []);
  setupUser();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
