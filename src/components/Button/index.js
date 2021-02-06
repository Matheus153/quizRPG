import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.success};
  color: #fefef2;
  border-radius: 3px;
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .8;
  }

  &:disabled {
    background-color: #8B8682;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
