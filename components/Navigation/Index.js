import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export default function Navigation() {
  const { pathname } = useRouter();
  const splittedPathname = pathname.split("/");
  const slash = "/";
  const currentPath = slash.concat(splittedPathname[1]);

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
  background: linear-gradient(
    310deg,
    hsl(233, 46%, 65%) 0%,
    hsl(233, 46%, 75%) 100%
  ); // --secondary-400
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 0.2rem outset hsl(233, 46%, 75%); //--secondary-300
  border-bottom: 0;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  justify-content: space-around;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: hsl(233, 46%, 95%); // --secondary-100
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;

  &:hover {
    color: hsl(233, 46%, 85%); // --secondary-200
  }
  ${(props) =>
    props.href === props.$currentPath &&
    css`
      color: hsl(233, 46%, 35%); //--secondary-800

      &:hover {
        color: hsl(233, 46%, 55%); //--secondary-600
      }
    `};
`;
