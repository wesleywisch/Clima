import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    max-width: 376px;
    width: 100%;
    border-radius: 1.2rem;
    margin: 10rem auto;

    main{
        text-align: center;
        padding: 2rem;
        border-radius: 1.2rem 1.2rem 0 0;
        background: linear-gradient(180deg, #1553A8 ,#2562B3);

        .city{
            color: #fafafa;
            font-size: 2rem;
        }

        .date{
            color: #fafafa;
            margin-top: 0.5rem;
            font-size: 1.2rem;
        }

        .container-img img{
            width: 45%;
        }

        .container-temp{
            color: #fafafa;
            margin: 1rem 0;
            display: flex;
            justify-content: center;

            font-size: 6.2rem;
            font-weight: 900;
        }

        .hi-low{
            color: #fafafa;
            display: flex;
            justify-content: space-around;
            font-size: 2rem;

            img{
                width: 30px;
            }

            strong{
                display: block;
            }
        }
    }

    footer{
        padding: 1.5rem;

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
            background: #d5d5d5;
        }

        button{
            width: 50px;
            height: 32px;
            border: 0;
            border-radius: 0 0.8rem 0.8rem 0;
            background: #f1f1f1;

            img{
                width: 22px;
            }
        }
    }

    @media (max-width: 450px){
        max-width: 276px;

        main {
            .city{
                font-size: 1.5rem;
            }

            .hi-low{
                display: block;

                .foto{
                    margin: 1rem 0;
                }
            }
        }

        footer{
            input{
                font-size: 1rem;
            }
        }
    }
`;