import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Username = styled.span`
    color: ${({theme})=>theme.text};
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
    color: ${({theme})=>theme.text};
`

const Comment = () => {
  return (
    <Container>
        <Avatar src="/assets/user.jpeg"/>
        <Details>
            <Username>John Doe <Date>1 day ago</Date> </Username>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quibusdam dolorum sequi quidem dolorem provident, veritatis minus aperiam aut veniam hic nam, et dignissimos placeat non nisi commodi cupiditate incidunt!</Text>
        </Details>
    </Container>
  )
}

export default Comment