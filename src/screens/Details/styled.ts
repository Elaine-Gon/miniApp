import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 200px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .img {
        width: 350px;
        height: 480px;
        border-radius: 2px 10px 2px 10px;
        margin-right: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`


export const Content = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    border: 2px solid gray;
    border-radius: 10px 18px 10px 18px;
    margin-top: 20px;
`

export const Title = styled.h2`
    color: gray;
    font-size: 1.4rem;
    margin-top: 10px;
`

export const Text = styled.p`
    font-size: 1rem;
`