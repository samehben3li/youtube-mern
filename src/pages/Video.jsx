import styled from "styled-components"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined"
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined"
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined"
import Comments from "../components/Comments"
import Card from "../components/Card"

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
  padding: 20px 30px;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 30px;
  color: ${({theme})=>theme.text};
`

const Details = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({theme})=>theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({theme})=>theme.text};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`

const Recommandation = styled.div`
  flex: 2;
`

const Video = () => {
  return (
    <Container>
        <Content>
          <VideoWrapper>
            <iframe
              width="100%"
              height="430"
              src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </VideoWrapper>
          <Title>test video</Title>
          <Details>
            <Info>7,945,553 views . Juin 22, 2022</Info>
            <Buttons>
              <Button>
                <ThumbUpOutlinedIcon />
                123
              </Button>
              <Button>
                <ThumbDownOffAltOutlinedIcon />
                Dislike
              </Button>
              <Button>
                <ReplyOutlinedIcon />
                share
              </Button>
              <Button>
                <AddTaskOutlinedIcon />
                Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src="/assets/user.jpeg" />
              <ChannelDetail>
                <ChannelName>The Knower</ChannelName>
                <ChannelCounter>300k subscribers</ChannelCounter>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur, pariatur fugiat facilis, quos quae, ullam optio assumenda beatae voluptatum laboriosam et rem hic sit inventore voluptas veritatis laborum debitis!</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
          <Comments />
        </Content>
        <Recommandation>
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
          <Card type="sm" />
        </Recommandation>
    </Container>
  )
}

export default Video
