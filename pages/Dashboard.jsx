import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
  )
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #0a0b0d;
  color: white;
  overflow-x: hidden;
`

const MainContainer = styled.div`
  flex: 1;
`