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
  background: var(--slawic-secondary); // --secondary-400
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  border-bottom: 0;
  z-index: 100;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;

  justify-content: space-around;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--slawic-primary);
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    color:;
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
