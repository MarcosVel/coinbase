import styled from "styled-components";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { coins } from '../static/coins';
import Coin from "./Coin";

const Portfolio = () => {
  return (
    <Wrapper>
      <Content>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div><BsThreeDotsVertical /></div>
              </TableRow>
            </TableItem>
            <Divider />
            {coins.map((coin, index) => (
              <div key={index}>
                <Coin coin={coin} />
                <Divider />
              </div>
            ))}
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
};

export default Portfolio;

const Wrapper = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2rem 1rem;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: center;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`