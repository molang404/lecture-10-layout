import { RouterProvider } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { AppRouter } from "./router/AppRouter.tsx";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useEffect, useState } from "react";

function App() {
    // 초기값 자리에 함수를 집어넣을 수도 있음
    // useState가 state를 만들 때 그 함수를 실행시키고 난 결과를 초기값으로 사용함
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        // localStorage에서 가져오는 값은, 무조건 string | null
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";  // "dark"가 아니든, 없든 무조건 "light"
    }); // 테마 상태를 저장하는 state

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const onClick = () => {
        // setState에도 매개변수로 함수를 작성할 수 있는데,
        // 이 때 함수의 매개변수 자리에는 "지금 현재 state 값"이 들어옴
        setTheme((prev) => prev === "dark" ? "light" : "dark");
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
