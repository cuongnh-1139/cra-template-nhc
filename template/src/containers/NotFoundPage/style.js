import styled from 'styled-components';

export const NotFoundPageWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.palettes.primary};
  padding: ${({ theme }) => theme.sizes.LG};
`;
