import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PrimaryInput = styled.input`
  width: 352px;
  padding: 10px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weigth: 400;
  font-size: 14px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
    </InputContainer>
  );
}