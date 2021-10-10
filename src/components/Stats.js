import React from 'react';
import { Row, LeftText, Header2, RightText, Separator, FurtherDetails } from './StyledComponents';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import useCollapse from 'react-collapsed';
import styled from 'styled-components';

const ColumnsContainer = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   max-height: 320px;
   margin-bottom: 5px;
`;

const StatCard = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div>
            <Header2>{props.title}</Header2>
            <div  {...getCollapseProps()}>
                <ColumnsContainer>
                    {props.stats.map(stat =>
                        <Row key={stat[0]}>
                            <LeftText>
                                <FurtherDetails>{stat[0]}</FurtherDetails>
                            </LeftText>
                            <Separator>:</Separator>
                            <RightText>
                                <FurtherDetails>{stat[1]}</FurtherDetails>
                            </RightText>
                        </Row>
                    )}
                </ColumnsContainer>
            </div>
            {isExpanded ? <IoIosArrowDropup {...getToggleProps()} />
                : <IoIosArrowDropdown {...getToggleProps()} />
            }
            <hr />
        </div>
    )
}

export default StatCard;