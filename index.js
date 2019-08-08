import styled, { css } from 'styled-components'
import { width, height } from 'styled-system'

export default styled.input`
  -webkit-appearance: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: 1.2;
  padding: 7px 10px;
  width: 100%;
  transition: all 0.3s;
  ${width}
  ${height}
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.grey300};
  background-color: ${props => props.theme.colors.white};
  ::placeholder {
    color: ${props => props.theme.colors.grey300};
  }
  ${props =>
    props.withError &&
    css`
      border-color: ${props.theme.colors.error};
    `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary200};
    border: 1px solid ${props => props.theme.colors.primary400};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.grey100};
    border: 1px solid ${props => props.theme.colors.grey200};
    cursor: not-allowed;
  }
`
