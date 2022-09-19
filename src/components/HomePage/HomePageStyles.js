import styled from "styled-components";

const MainContainer = styled.div`
    margin:120px 0;
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
h3{
    padding:0 40px;
    font-size:14px;
    color:#000000;
    line-height:24px;
}
a{
    text-decoration:none;
}
p{
    padding:0 40px;
    font-size:12px;
    color:#878787;
    margin-bottom:20px;
}
`

export {
    MainContainer,
    Options,
    TestList
}