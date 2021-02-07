import React from "react";
import Pozdrav from "../lib/Pozdrav";

function Header() {
   return <header>{Pozdrav()} Vítejte na té nejúžasnější stránce, co jste kdy viděli a kdy uvidíte</header>;
}

export default Header;
