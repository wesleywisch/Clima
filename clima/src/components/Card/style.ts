import styled from "styled-components";

export const Container = styled.div`
    max-width: 576px;
    width: 100%;
    margin: 120px auto;

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

        .city{
            font-size: 2rem;
        }

        .date{
            font-size: 1rem;
        }

        .container-temp{
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;

            font-size: 6.2rem;
            font-weight: 900;
            text-shadow: 3px 6px rgba(0, 0, 0, 0.2);
        }

        .weather{
            font-size: 2rem;
        }

        .hi-low{
            font-size: 1.4rem;
        }
    }

    footer{
        background: #aaa;
        padding: 12px;

        div{
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