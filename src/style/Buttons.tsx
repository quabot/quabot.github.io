import styled, { css } from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 25px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  border-radius: 20px;
  margin: 0px;
  width: 42px;
  height: 25px;
  &:checked + ${CheckBoxLabel} {
    background: #4CD964;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

/* YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
  THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023 */