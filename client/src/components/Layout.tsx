import styled from "styled-components";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <NavigationBar />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
