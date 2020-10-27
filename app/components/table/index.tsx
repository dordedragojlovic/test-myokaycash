import React from 'react';
import { ComponentContainer, StyledTable, Title } from './styles';

function Table( {title, columns, rows} : {title: string, columns: Array<String>, rows: any}) {

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
    </ComponentContainer>
  );
}

export default Table;
