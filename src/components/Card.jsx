import React from "react";

function Card(props) {
   console.log(props);
   return (
      <div className="card">
         <img
            src={props.img}
            alt={props.name}
            className="img-fluid card-img-top"
         />
         <div className="pt-3">
            <h2>{props.name}</h2>
            <p className="mb-0">E-mail: <strong><a href={`mailto:${props.email}`}>{props.email}</a></strong></p>
            <p>Telefon: <strong>{props.tel} </strong></p>
         </div>
      </div>
   );
}

export default Card;
