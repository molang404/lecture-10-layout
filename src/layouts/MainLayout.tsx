import styled from "styled-components";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.tsx";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
`;
// props : styled-components가 넣어주는 데이터
// props.theme 프로퍼티에, 우리가 ThemeProvider에서 넣은 Theme 값이 존재

const Main = styled.main`
    flex: 1;
`;

// MainLayout은 컴포넌트 0
// 얘는 Props로 전달 받음
function MainLayout() {
    return (
        <Wrap>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Wrap>
    );
}

export default MainLayout;
