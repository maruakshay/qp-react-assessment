import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./HomePage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
