import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid rgba(31, 29, 29, 0.8); 
  background-color: rgba(31, 29, 29, 0.93);
  box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  -webkit-box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1empx;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-radius: 4px;
  text-shadow: -2px 2px 1px rgba(10, 10, 10, .8);
  
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: #fefef3;
  background-color: #222222;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
