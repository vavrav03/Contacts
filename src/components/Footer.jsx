import React from "react";

function Footer() {
   return (
      <footer>
         <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href="mailto:vladimir.vavra@student.gyarab.cz">Vladimír Vávra</a>
         </p>
      </footer>
   );
}

export default Footer;
