import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Select from 'react-select';

export const Spinner = styled(Loader)`
    margin: 20px auto;
    color: white;
    height: 80px;
    width: 80px; 
`;

export const StyledSelect = styled(Select)`
    color: black;
    min-width:300px;
    font-size: 18px;
    margin: 10px;
`;

export const Container = styled.div`
    background-color: #3d424d;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PageTitle = styled.h1`
    margin: 10px;
    font-weight: 500;
`;

export const Page = styled.div`
    color: white;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Message = styled.p`
    width: fit-content;
    margin: 10px auto;
    font-size: 15px;
`;

export const StyledCard = styled.div`
  background-color: #2d3038;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #0e1529;
  margin: 5px 10px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LeftText = styled.div`
  text-align: right;
  width: 47%;
`;

export const RightText = styled.div`
  text-align: left;
  width: 47%;
`;

export const Separator = styled.div`
  width: 4%;
  font-weight: 600;
  font-size: calc(4px + 1vmin);
`;

export const Header = styled.div`
  font-size: calc(16px + 1vmin);
  text-shadow: 2px 2px #0e1529;
  line-height: calc(30px + 1vmin);
`;

export const Header2 = styled.div`
  font-size: calc(14px + 1vmin);
  line-height: calc(30px + 1vmin);
  font-weight: 600;
`;

export const FurtherDetails = styled.div`
  font-size: calc(4px + 1.5vmin);
  line-height: calc(20px + 1vmin);
`;