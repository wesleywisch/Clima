import styled from "styled-components";

export const Container = styled.div`
    border: 8px solid rgba(0,0,0, .1);
    border-left-color: #22a6b3;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 2rem auto;
  
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;