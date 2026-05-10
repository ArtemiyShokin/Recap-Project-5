import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <StyledList>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/artpieces">Gallery</StyledLink>
        </li>
        <li>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </li>
      </StyledList>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: hsl(137, 36%, 85%);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 0.2rem outset #ee5324;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
  justify-content: center;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3e4aa8;
  font-weight: bold;

  &:hover {
    color: #ee5324;
  }
`;

// const NavigationButton = styled.button`
// background-color: hsl(177, 36%, 85%);
// width: auto;
// height: 2rem;
// `;
// <NavigationWrapper>
//   <Link href="/">
//     <NavigationButton>Spotlight</NavigationButton>
//   </Link>
//   <Link href="/artpieces">
//     <NavigationButton>Gallery</NavigationButton>
//   </Link>
//   <Link href="/favorites">
//     <NavigationButton>Favorites</NavigationButton>
//   </Link>
// </NavigationWrapper>
