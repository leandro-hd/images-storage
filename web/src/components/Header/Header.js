import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  margin: 32px 128px;
  
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 64px;
    height: 64px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto 0 10px;
    color: #E1E1E6;
  }

  .menu-links {
    font-size: 20px;
    font-weight: 700;
    color: #A8A8B3;
    text-decoration: none;
    transition: 0.2s;
  }

  .menu-links:hover {
    color: #E1E1E6;
  }

  .pipe {
    font-size: 24px;
  }

  .pipe:hover {
    color: #A8A8B3;
  }

  .menu-links-space {
    margin-left: 55px;
  }
`;
