import { StoreProvider } from "./providers/storeProvider";
import { AppRouter } from "./providers/routerProvider";
import "./styles/global.css";

export function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}
