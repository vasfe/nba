import styled from 'styled-components';
import Loader from 'react-loader-spinner';

export const GamesContainer = styled.div`
    background-color: #3d424d;
    font-size: calc(8px + 2vmin);
    color: white;
    display: flex;
    flex-direction: column;
`;

export const PageTitle = styled.div`
    margin: 10px auto;
    text-align: center;
    font-size: calc(13px + 2vmin);
`;

export const Spinner = styled(Loader)`
    width: fit-content;
    margin: 20px auto;
`;

export const Page = styled.div`
    color: white;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const Message = styled.p`
    width: fit-content;
    margin: 10px auto;
`;