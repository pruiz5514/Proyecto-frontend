import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color: var(--orange);
    color: var(--white);
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 18px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: var(--orange-hover);
    }
`