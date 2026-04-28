import type { DefaultTheme } from "styled-components";
//            ==>  이미 S.C에서 제공하는 기능이 DefaultTheme를 기반으로 제공
//                 ==> styled-components의 메소드(기능)가 매개 변수로 DefaultTheme를 받도록 강제하고 있기 떄문에,
//                     DefaultTheme를 우리 입맛대로 바꿔서 사용해야 함

export const LightTheme: DefaultTheme = {
    color: {
        background: "#ffffff",
        text: "#111111",
        primary: "#6c63ff",
        muted: "#f4f4f4"
    },
};

export const DarkTheme: DefaultTheme = {
    color: {
        background: "#111111",
        text: "#ffffff",
        primary: "#6c63ff",
        muted: "#222222"
    },
};