import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <>
      {colors.map((color, index) => (
        <StyledDiv key={index} $color={color}>
          {color}
        </StyledDiv>
      ))}
    </>
  );
}

const StyledDiv = styled.div`
  background-color: ${(props) => props.$color};
`;
