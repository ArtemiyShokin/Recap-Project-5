import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <>
      <StyledColorCotainer>
        {colors.map((color, index) => (
          <StyledDiv key={index} $color={color} />
        ))}
      </StyledColorCotainer>
    </>
  );
}

const StyledDiv = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.$color};
  border: 1px solid black;
  border-radius: 100%;
`;

const StyledColorCotainer = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
`;
