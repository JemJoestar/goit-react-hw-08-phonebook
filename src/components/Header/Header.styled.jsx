import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;

  background-color: #2e8be8;

  position: fixed;
  top: 0;
  left: 0;

  .loggedin-welcome {
    display: flex;
    align-items: center;
    gap: 16px;
    .userName {
      padding: 8px 0;
      height: fit-content;
      text-align: center;
      text-decoration: none;
      color: #ffffff;
      font-weight: 500;
    }
    button {
      padding: 4px 8px;
      height: fit-content;
      color: #ec3131;
      font-size: 12px;
      font-weight: 500;
      border-radius: 5px;
      border: 2px solid #ec3131;
    }
  }
  .navigation {
    display: flex;
    gap: 16px;

    .nav-link {
      font-size: 16px;
      text-decoration: none;
      padding-top: 8px;
      padding-bottom: 8px;
      font-weight: 500;
      color: #0f4173;
      &.active {
        color: #ffffff;
      }
    }
  }
`;
