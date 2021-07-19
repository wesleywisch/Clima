import styled from "styled-components";

export const Container = styled.div`
    max-width: 576px;
    width: 100%;

    header{
        background: #aaa;

        h2{
            text-align: center;
            color: #fafafa
        }
    }

    main{
        background: #fafafa;
        text-align: center;
    }

    footer{
        background: #aaa;
        padding: 12px;

        form{
            display: flex;
        }

        input{
            width: 90%;
            height: 32px;
            outline: none;
            border: 0;
            border-radius: 0.8rem 0 0 0.8rem;
            padding-left: 2%;
            font-size: 1.3rem;
        }

        button{
            width: 50px;
            height: 32px;
            border: 0;
            border-radius: 0 0.8rem 0.8rem 0;

            img{
                width: 22px;
            }
        }
    }
`;