import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export default function Navigation() {
  const { pathname } = useRouter();
  const splittedPathname = pathname.split("/");
  const slash = "/";
  const currentPath = slash.concat(splittedPathname[1]);

  console.log(currentPath);

  return (
    <NavigationWrapper>
      <StyledList>
        <li>
          <StyledLink href="/" $currentPath={currentPath}>
            Spotlight
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/artpieces" $currentPath={currentPath}>
            Gallery
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/favorites" $currentPath={currentPath}>
            Favorites
          </StyledLink>
        </li>
      </StyledList>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: hsl(233, 46%, 65%); // --secondary-400
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 0.4rem outset hsl(233, 46%, 75%); //--secondary-300
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem;

  justify-content: center;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(233, 46%, 95%); // --secondary-100
  font-weight: bold;

  &:hover {
    color: hsl(233, 46%, 85%); // --secondary-200
  }
  ${(props) =>
    props.href === props.$currentPath &&
    css`
      color: hsl(233, 46%, 25%); //--secondary-800
      padding: 1rem 0;

      &:hover {
        color: hsl(233, 46%, 45%); //--secondary-600
      }
    `};
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
