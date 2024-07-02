import { Outlet } from "react-router";
import NavigationBar from "./components/NavigationBar.tsx";
import styled from "styled-components";

const Div = styled.div`
  height: 200vh;
`;

export const App = () => {
  return (
    <Div>
      <NavigationBar />
      <Outlet />
    </Div>
  );
};

export default App;
