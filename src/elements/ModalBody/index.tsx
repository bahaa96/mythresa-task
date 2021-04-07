import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

interface IProps {
  height: number;
}

const ModalBody = styled.View<IProps>`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  height: ${(props) => height * props.height}px;
  width: 100%;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default ModalBody;
