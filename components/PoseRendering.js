//'use client';

import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import PoseElement from "./PoseElement";

import { v4 as uuid } from 'uuid';
import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"; 

import Image from 'next/image';


const DragDropTesti = (props) => {
  const [state, setState] = useState({
    [uuid()]: []
  });

  const { data: session, status } = useSession()    // Redux välittää tietokannan tietoa, katsottu mallia todo:sta, samaan tapaan poses poseerauksille.
  const poses = useSelector(state => state.poses)   // TÄSSÄ TULEE TIETOA TIETOKANNASTA,  Pose taulusta!

  let taulukko = poses;
    //console.log(taulukko);                        // ensi kokeilu, saadaanko mitään tuotua tänne asti.   
  
  
  let poseElements = [];                            // toinen kokeilu, tehdään taulukko, jotta saadaan tietoa tulostettua web-sivulle.

  console.log("----- Kokeillaan tulostaa Pose taulun dataa ------")
  for (let i = 0; i < taulukko.poses.length; i++) {
    const pose = taulukko.poses[i];
    console.log(`PoseId: ${pose.PoseId}`);
    console.log(`PoseName: ${pose.PoseName}`);
    //console.log(`PoseCreateDate: ${pose.PoseCreateDate}`);
    // Render other properties as needed
    console.log("-------------------------");


     // kokeillaan tällä tavoin, jos saataisiin kaikki 10 riviä,  1, 2, 3, 4, 5, 6, 7, 8, 9, 10  jne. tulostettua web-sivulle
    
     const poseElement = (
      <div key={i}>
        PoseId: {pose.PoseId}, PoseName: {pose.PoseName}
      </div>
    );
    poseElements.push(poseElement);
    // alhaalla, rivillä 419,   return <div>{poseElements}</div>;     komento tulostaa sitten web-sivulle, taulukon.
  }
  
  // näyttäisi toimivan,   konsoliin asti tulee kyllä  tietoa  tietokannasta!
  //                       ja sitä voidaan tulostaa web-selaimen konsoliin halutusti.

  //  ja web sivullekin saadaan näytille jo  tietoa,  tästä on hyvä jatkaa eteenpäin.
    


//  Drag&Drop koodi,  Jere:lta;  https://student.labranet.jamk.fi/~AC8424/yogaplanner/hello-pangea-dnd-demo  
//            hiukan muokattu,
//            jotta Pose kuva ja nimi näkyy,  "kortissa",  jota voidaan raahata ja pudottaa ruudulla.


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};



const Content = styled.div`
  margin-left: 100px;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  align-items: center;
  align-content: center;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${(props) => (props.isDragging ? "dashed #000" : "solid #ddd")};
`;

const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  margin: -0.5rem 0.5rem -0.5rem -0.5rem;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  border-right: 1px solid #ddd;
  color: #000;
`;

const List = styled.div`
  border: 1px
    ${(props) => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 100px;
  font-family: sans-serif;
`;

const Kiosk = styled(List)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

const Container = styled(List)`
  margin: 0.5rem 0.5rem 0.5rem;
  display: flex;
  min-height: 3rem;
  background-color: #eee;
  border: 0;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  color: #000;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`;

const ButtonText = styled.div`
  margin: 0 1rem;
`;

//let kuva = new Image(100, 100);
//kuva.src = "/logo.png";


const grid = 10;
var poseeraus = "";

let ITEMS = [];
for (let i=1; i<=10; i++) {

//  kovakoodattu, nyt ensi alkuun,  ennenkun opitaan parseroimaan tietokanta data tähän oikein.
//                tietokannan luku jo onnistuu,  mutta parserointi taulukosta on vielä kesken.
  if (i == 1){
      poseeraus = "Alaspäin katsova koira";
  }
  if (i == 2){
      poseeraus = "Delfiini";
  }
  if (i == 3){
    poseeraus = "Kameli";
  }
  if (i == 4){
    poseeraus = "Päällä seisoja";
  }
  if (i == 5){
    poseeraus = "Seisova puu";
  }
  if (i == 6){
    poseeraus = "Seilaaja";
  }
  if (i == 7){
    poseeraus = "Puoli kuu";
  }
  if (i == 8){
    poseeraus = "Silta";
  }
  if (i == 9){
    poseeraus = "Ruumis";
  }
  if (i == 10){
    poseeraus = "Sotilas";
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  HUOM!,       tietokannan luku onnistuu jo, Pose taulusta tulee luettuna tieto tänne asti,  mutta  tiedon parserointi puuttuu vielä.
//---------------------------------------------------------------------------------------------------------------------------------------
//  Tässsä pitäisi siis vielä  parsia  siitä  "poses"      json  taulukosta,   ne  nimet,
//      sen jälkeen  voi nuo ylempänä olevat  kiinteät koodaukset poistaa..
//      ne oli siihen heitetty,  ensi alkuun, että voi vähän testat front-end  puolta,  miltä tieto näyttäisi ruudulla..  drag&drop:ssa.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Näiden if lauseiden tilalle,     pitäisi lukea tietokannasta,         "poses"          "Pose" taulu tietokannassa
//  tämän tiedoston alussa,
//     tieto tulee jo   pose.js  tiedostosta  oikein tänne asti,   sillä redux:n  ja  state  homman avulla,  katsottu mallia  todo:sta.
//
//  console.log  :n avulla.      nähdään,   web-developer tools:n  konsolissa,  selaimessa,  että tieto tulostuu tästä javascript tiedostosta.
//
//   0: Object { PoseId: 1, PoseName: "Alaspäin katsova koira", PoseCreateDate: "", … }
//   1: Object { PoseId: 2, PoseName: "Delfiini", PoseCreateDate: "", … }
//   2: Object { PoseId: 3, PoseName: "Kameli", PoseCreateDate: "", … }
//   3: Object { PoseId: 4, PoseName: "Päällä seisoja", PoseCreateDate: "", … }
//   4: Object { PoseId: 5, PoseName: "Seisova puu", PoseCreateDate: "", … }
//   5: Object { PoseId: 6, PoseName: "Seilaaja", PoseCreateDate: "", … }
//   6: Object { PoseId: 7, PoseName: "Puoli kuu", PoseCreateDate: "", … }
//   7: Object { PoseId: 8, PoseName: "Silta", PoseCreateDate: "", … }
//   8: Object { PoseId: 9, PoseName: "Kuollut", PoseCreateDate: "", … }
//   9: Object { PoseId: 10, PoseName: "Sotilas", PoseCreateDate: "", … }

//
//  eli vaikein työ (Backend) on nyt jo tehty, nyt täytyy vaan parsia siitä json taulukosta,  
//   ne halutut tiedot, ja esittää käyttäjälle. (FrontEnd)
//
//       sitten tietenkin  vielä miettiä se, miten ne raahatut, ja pudotetut  poseeraukset  tallennetaan  talteen,  käyttäjän muk. paikkaan.
//       ja  lisätä se  .pdf tiedoston generointi nappi  myös tähän.
//
//      https://codesandbox.io/s/rzdhd         <---    tuolla on hyvä esimerkki.       
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ITEMS[i] = {
    id: uuid(),
    //content: "Pose" + i,    // + kuva       ///////////////////////////////////////////////////////////////////////////
    //imgUrl: "/logo.png"
    //imgUrl: "/jooga_poseeraukset/1.png"
    imgUrl: '/jooga_poseeraukset/' + i + '.png',
    content: poseeraus
  }
}



  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setState((prevState) => ({
          ...prevState,
          [destination.droppableId]: reorder(
            state[source.droppableId],
            source.index,
            destination.index
          )
        }));
        break;
      case "ITEMS":
        setState((prevState) => ({
          ...prevState,
          [destination.droppableId]: copy(
            ITEMS,
            prevState[destination.droppableId],
            source,
            destination
          )
        }));
        break;
      default:
        setState((prevState) => ({
          ...prevState,
          ...move(
            prevState[source.droppableId],
            prevState[destination.droppableId],
            source,
            destination
          )
        }));
        break;
    }
  };

  const addList = () => {
    setState((prevState) => ({ ...prevState, [uuid()]: [] }));
  };

  // Normally you would want to split things out into separate components.
  //{item.content}
  // But in this example everything is just done in one place for simplicity
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="ITEMS" isDropDisabled={true}>
        {(provided, snapshot) => (
          <Kiosk
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {ITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <React.Fragment>
                    <Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                      style={provided.draggableProps.style}
                    >
                      <Content>{item.content}</Content>                
                      <Image src={item.imgUrl}width={100} height={100} />

 
                    </Item>
                    {snapshot.isDragging && <Clone>{item.content}</Clone>}
                  </React.Fragment>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Kiosk>
        )}
      </Droppable>
      <Content>
        <Button onClick={addList}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
          </svg>
          <ButtonText>Lisää uusi</ButtonText>
        </Button>
        {Object.keys(state).map((list, i) => (
          <Droppable key={list} droppableId={list} direction="horizontal" style={{display:"flex"}}>
            {(provided, snapshot) => (
              <Container
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {state[list].length
                  ? state[list].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Item
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            style={provided.draggableProps.style}
                          >

                          <Content>{item.content}</Content>        
                          <Image src={item.imgUrl}width={100} height={100} />
                          </Item>
                        )}
                      </Draggable>
                    ))
                  : !provided.placeholder && <Notice>Drop items here</Notice>}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        ))}



     <p>
      <h2>Tämä tieto haettiin tietokannasta, pose taulusta: </h2>
      
      <div>{poseElements}</div>

      <h2>Eli tietokannasta lukeminenkin jo onnistuu, mutta vielä on työtä paljon. </h2>
      <h3> - seuraavaksi täytyy harjoitella myös tiedon tallentamista tietokantaan </h3>
    </p>


      </Content>
    </DragDropContext>




  );
};


export default DragDropTesti







// DRAG&DROP ssa  on vielä ongelma,  että jos päivittää  pose  sivun,   raahaus ei toimi.
//  mutta jos NavBar:ssa tämän jälkeen  liikuu  toiselle sivulle ja palaa pose sivulle,
//   raahaus ja droppaus  toimii taas.

//  Selaimen  Consoliin tulee  warningeja,  aikalailla,   drag and drop  hommista...


//import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'; 

/* 
* Modified from https://codesandbox.io/s/drag-and-drop-copy-beautiful-dnd-functional-khno7 by Jere
* Public pens are MIT licensed.
*
* Originally used react-beautiful-dnd is no longer developed by Atlassian and there is also a bug in react-beautiful-dnd 
* with react 18 and strict mode that brakes dnd-functionality.
* Issue: https://github.com/atlassian/react-beautiful-dnd/issues/2407
*
* The community driven successor fork @hello-pangea/dnd fixes this bug and is actively developed.
* https://github.com/hello-pangea/dnd
* https://www.npmjs.com/package/@hello-pangea/dnd
*/