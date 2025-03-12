import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease-in-out, top 0.3s ease-in-out;
    z-index: 1000;

    &.black {
        background-color: black;
        color: white;
    }

    &.white {
        background-color: white;
        color: black;
    }

    &.hidden {
        top: -100px; 
    }

    &.visible {
        top: 0;
    }

    img {
        width: 60px;
    }

    ul {
        display: flex;
        list-style: none;

        li {
            margin-right: 1rem;
        }
    }

    .cart-icon {
        color: inherit; 
        cursor: pointer;
    }
`;
