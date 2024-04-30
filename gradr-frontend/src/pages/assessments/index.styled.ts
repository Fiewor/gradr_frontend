import { Tr } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TrStyled = styled(Tr)`
  ${({ notSeen }: { notSeen: boolean }) =>
    notSeen &&
    css`
      td,
      th {
        background: #fffdec !important;
      }
    `}
`;

const ULStyles = styled.div`
  tr {
    font-size: 14px;
    text-transform: none;
    td,
    th {
      padding: 12px;
      text-transform: none;
    }
    th {
      color: black;
      letter-spacing: 0px;
      font-weight: 600;
      font-family: 'Exo';
      font-size: 14px;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
      height: 46px;
    }
    td {
      color: black;
      font-family: 'Poppins';
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 4px !important;
      padding-bottom: 4px !important;
      height: 48px !important;
      max-height: 30px;
    }
    th:first-of-type {
      border-top-left-radius: 4px;
      padding-left: 24px !important;
    }
    th:last-child {
      border-top-right-radius: 4px;
    }
  }
  tr {
    border-radius: 10px;
    border-bottom: 1px solid #e5e5e5;
    td {
      background: #ffffff;
    }
  }
  tr:last-child {
    border-bottom: 0px solid #e5e5e5;
  }
`;
export default ULStyles;
