import styled from 'styled-components';

export const FormStyled = styled.form`
  background: var(--grey-3);
  border-radius: 3px;
  padding: 33px 18px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  justify-items: center;
  /* gap: 8px; */
  width: 100%;

  h2 {
    color: var(--grey-0);
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    margin-bottom: 22px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-0);
    margin-bottom: 10px;
    /* margin-top: 21px; */
  }

  & > input {
    background: var(--grey-2);

    border: 1px solid transparent;
    border-radius: 3px;
    border-style: none;
    outline: none;

    padding: 8px 13px;

    width: 100%;

    color: var(--white);

    &:focus-visible {
      outline: 1px solid white;
      border-radius: 3px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    background: var(--grey-2);

    border: 0.9772px solid transparent;
    border-radius: 3px;

    position: relative;

    /* padding: 8px 13px; */
    /* margin-bottom: 30px; */

    width: 100%;

    input {
      padding: 8px 13px;
      width: 100%;
      color: var(--white);
      outline: none;

      &:focus-visible {
        outline: 1px solid white;
        border-radius: 3px;
      }
    }
  }

  select {
    background: var(--grey-2);

    border: 1px solid transparent;
    border-radius: 3px;

    padding: 8px 13px;

    width: 100%;

    color: #868e96;
  }

  button {
    width: 100%;
    background-color: var(--color-primary);
    margin: 15px 0;

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  a {
    background-color: var(--grey-1);
    width: 100%;
    border-radius: 4px;
    padding: 10px 23px;
    border-radius: 4px;
    border: 1px solid transparent;
    text-align: center;
    font-size: 16px;

    margin-top: 20px;

    &:hover {
      background-color: var(--grey-2);
    }
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    align-self: center;
    /* margin-bottom: 22px;
    margin-top: 27px; */
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
    align-self: center;
    /* margin-bottom: 22px; */
  }

  .error__name {
    height: 5px;
    color: var(--negative);
    margin-top: 5px;
    margin-bottom: 10px;
    align-self: flex-end;
  }

  .eye {
    cursor: pointer;
    color: #868e96;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
