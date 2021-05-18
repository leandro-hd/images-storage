import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
`;

export const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 102px;

  .dashboard-image {
    margin-left: 128px;
    border: 1px solid #000000;
    border-radius: 32px;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    mix-blend-mode: lighten;
  }
`;

export const Info = styled.div`
  display: block;
  margin: 26px 30px 0 30px;

  .title {
    font-size: 64px;
    font-weight: 700;
    color: #E1E1E6;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0 89px;
    color: #A8A8B3;
  }
`;

export const TotalImages = styled.div`
  display: flex;

  #publish-icon {
    width: 32px;
    height: 32px;
    color: #E1E1E6;    
  }

  .text-complement {
    font-size: 24px;
    font-weight: 700;
    margin-left: 10px;
    color: #E1E1E6;
  }
`;