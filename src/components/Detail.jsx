import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "./firebase";
import { collection } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  // useEffect(() => {
  //   db.collection("movies").doc(
  //     id.get().then((doc) => {
  //       if (doc.exists) {
  //         setDetailData(doc.data());
  //       } else {
  //         console.log("no such document in the database");
  //       }
  //     })
  //   );
  // });

  const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
  });

  return (
    <Container>
      <Background>
        <img src="" alt="" />
      </Background>
      <ImageTitle>
        <img src="" alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle>Subtitle</Subtitle>
        <Description>Description</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  margin: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-content: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 2px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  background-color: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  :hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 8px 12px;
    margin: 0px 20px 0px 0px;

    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  color: white;
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgbba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
