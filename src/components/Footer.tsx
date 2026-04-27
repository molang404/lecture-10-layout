import styled from "styled-components";

const Foot = styled.footer`
    height: 70px;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Footer() {
    return <Foot>Copyright 2026 Practice</Foot>;
}

export default Footer;
