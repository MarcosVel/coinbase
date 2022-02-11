import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
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
`

const MainContainer = styled.div`
  flex: 1;
`