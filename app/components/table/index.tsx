import React from 'react';
import AddIcon from 'components/icons/add';

import { ComponentContainer, StyledTable, Title, ButtonWrapper, IconButton } from './styles';

function Table( {title, columns, rows, button, onClick} : {title: string, columns: Array<String>, rows: any, button: boolean, onClick}) {

  return (
    <ComponentContainer>
        <Title>{title}</Title>
        <StyledTable>
            <tr>
                {columns.map( (name, index) => (
                    <th key={`col-${index}`}>{name}</th>
                ))}
            </tr>
            {rows.map( ( item, index) => (
                <tr key={`row-${index}`}>
                    {
                        item.map( (data, index) => (
                            <td key={`row-${index}`}>{data}</td>
                        ))
                    }
                </tr>
                ))}
        </StyledTable>
            {
                button && (
                <ButtonWrapper>
                    <IconButton onClick={onClick}>
                        <AddIcon/>
                        <a>Add device</a>
                    </IconButton>
                </ButtonWrapper>
                )
            }
    </ComponentContainer>
  );
}

export default Table;
