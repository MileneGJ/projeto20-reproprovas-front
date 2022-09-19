import styled from "styled-components";

const MainContainer = styled.div`
    margin-top:120px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Options = styled.div`
width:50%;
display:flex;
justify-content:space-between;
margin:35px 0;
button{
    width:auto;
    padding:0 10px;
}
`

const TestList = styled.div`
margin:15px 0;
width:50%;
box-shadow: 0 1px 0 1px rgba(0,0,0,0.1);
padding:0 10px;
a{
    padding:0 40px;
    text-decoration:none;
    color:#000000;
}
p{
    padding:0 40px;
}
`

export {
    MainContainer,
    Options,
    TestList
}