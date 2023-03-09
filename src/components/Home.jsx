import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommended from "./Recommended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { query, collection, onSnapshot } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const q = query(collection(db, "movies"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    });
  }, [username]);

  // useEffect(() => {
  //   const colRef = collection(db, "movies");
  //   async function fetchData() {
  //     const docsSnap = await getDocs(colRef);
  //     docsSnap.forEach((doc) => {
  //       console.log(doc.data());
  //       switch (doc.data().type) {
  //         case "recommend":
  //           recommends = [...recommends, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "new":
  //           newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "original":
  //           originals = [...originals, { id: doc.id, ...doc.data() }];
  //           break;

  //         case "trending":
  //           trending = [...trending, { id: doc.id, ...doc.data() }];
  //           break;
  //       }
  //     });
  //   }
  //   fetchData();
  //   dispatch(
  //     setMovies({
  //       recommend: recommends,
  //       newDisney: newDisneys,
  //       original: originals,
  //       trending: trending,
  //     })
  //   );
  // }, [username]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommended />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  ::after {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
