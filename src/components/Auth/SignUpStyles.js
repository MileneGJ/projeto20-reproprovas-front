import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    height:90vh;
`
const Logo = styled.div`
    color:#3F61D7;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:320px;
    margin:20px;
    font-size:80px;
    div{
        display:flex;
    }
    h1 {
        color:#000000;
        font-weight:700;
        font-family: 'Lexend', sans-serif;
        font-size:36px;
    }
    h1:last-child{
        color:#3F61D7;
    }
`

const Forms = styled.div`
display:flex;
flex-direction:column;
align-items:center;
form{
    display:flex;
    flex-direction:column;
    align-items:center;
}
h2{
    font-weight:500;
    font-size:24px;
    margin:30px 0;
}
input{
    height:38px;
    font-size:16px;
    color:#000000;
    border:1px solid #C4C4C4;
    border-radius:5px;
    margin:8px 0;
    width:400px;
    font-family: 'Poppins', sans-serif;
    padding:10px;
}
div{
    padding:10px 0;
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    button{
        background-color:#1976D2;
        border:none;
        border-radius:5px;
        color:#FFFFFF;
        width:120px;
        height:36px;
        font-size:14px;
        font-weight:500;
    }
}
`

export {
    Container,
    Logo,
    Forms
}

