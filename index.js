import styled, { css } from 'styled-components'

const Input = styled.input`
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;

  font-family: inherit;
  font-size: inherit;
  line-height: 1.2;
  color: inherit;
  outline: 0;
  transition: all 0.3s;

  padding: 7px 10px;

  height: ${props => props.height ? props.height : '35px'};
  ${props => props.maxWidth && css`max-width: ${props.maxWidth};`}
  ${props => props.width && css`width: ${props.width};`}
  ${props => props.withError && css`border-color: ${props.theme && props.theme.colors && props.theme.colors.error ? props.theme.colors.error : 'hsla(6, 66%, 47%, 1)'} !important;`}

  border-radius: ${props => props.theme && props.theme.radius && props.theme.radius.inputRadius ? props.theme.radius.inputRadius : '0'};
  border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey300) ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)'};
  background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey0) ? props.theme.colors.grey0 : 'white'};
  color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey900) ? props.theme.colors.grey900 : 'hsla(215, 20%, 28%, 1)'};

  &:focus {
    box-shadow: 0 0 0 3px ${props => (props.theme && props.theme.colors && props.theme.colors.primary200) ? props.theme.colors.primary200 : 'hsla(202, 81%, 86%, 1)'};
    border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.primary400) ? props.theme.colors.primary400 : 'hsla(205, 79%, 66%, 1)'};
  }

	&:disabled {
		background-color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)'};
		border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(202, 20%, 86%, 1)'};
		cursor: not-allowed;
	}

  ::placeholder {
    color: ${props => (props.theme && props.theme.colors && props.theme.colors.grey300) ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)'};
  }
`

export default Input
