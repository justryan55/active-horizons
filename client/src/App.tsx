import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar.tsx";
import styled from "styled-components";
import Footer from "./components/Footer.tsx";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
`;

const Content = styled.main`
  flex: 1;
`;

export const App = () => {
  return (
    <AppContainer>
      <NavigationBar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </AppContainer>
  );
};

export default App;
