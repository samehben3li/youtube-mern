import styled from "styled-components"
import Comment from "./Comment"

const Container = styled.div`
    padding: 0px 10px;
`

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`

const Input = styled.input`
    color: ${({theme})=>theme.text};
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme})=>theme.soft};
    background-color: transparent;
    padding: 5px;
    width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="/assets/user.jpeg"/>
            <Input placeholder="Add a comment..." />
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments