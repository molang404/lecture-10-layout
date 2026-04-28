import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light"); // 테마 상태를 저장하는 state

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            {" "}
            {/* <- ThemeProvider로 감싸진 자식 컴포넌트들 안에서 사용되는 styled-components들에게 해당 theme 제공 */}
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}

export default App;
