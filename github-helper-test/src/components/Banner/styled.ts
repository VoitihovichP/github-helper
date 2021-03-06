import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 210px;
  @media (max-width: 1024px) {
    gap: 10px;
  }
`;

export const BannerImg = styled.img`
  min-width: 64px;
  min-height: 64px;
`;

export const BannerText = styled.p`
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  color: #808080;
`;
