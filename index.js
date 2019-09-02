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
  border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey300) ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)'};
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.white) ? props.theme.colors.white : 'white'};
  ::placeholder {
    color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey300) ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)'};
  }
  ${props =>
    props.withError &&
    css`
      border-color: ${props => (props.theme && props.theme.colors && props.theme.colors.error) ? props.theme.colors.error : 'hsla(6, 66%, 47%, 1)'};
    `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(202, 20%, 86%, 1)'};
    border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey400) ? props.theme.colors.grey400 : 'hsla(205, 20%, 66%, 1)'};
  }
  &:disabled {
    background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)'};
    border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(202, 20%, 86%, 1)'};
    cursor: not-allowed;
  }
`
