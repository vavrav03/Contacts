import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createListOfCards() {
   const listOfCards = contacts.map((data) => (
      <div className="cardWrapper col-xl-3 col-lg-4 col-md-6">
         <Card
            name={data.name}
            img={data.img}
            email={data.email}
            tel={data.tel}
         />
      </div>
   ));
   return <div className="row">{listOfCards}</div>;
}

function Contacts() {
   return (
      <div className="container-fluid">
         <h1>Kontakty</h1>
         {createListOfCards()}
      </div>
   );
}

export default Contacts;
