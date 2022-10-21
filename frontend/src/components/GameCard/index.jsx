import Styled from "./style";

export default function GameCard() {
  return (
    <Styled>
      <div className="boxPhoto" />
      <h2>Azul - Maitre chocolatier (2022) - Next Move Games</h2>
      <h3>2-4 joueurs - 30-45 minutes</h3>
      <p>
        Azul : Maître Chocolatier, le classique de Michael Kiesling dans une
        version thématisée pour les plus gourmands ! Joignez-vous aux meilleurs
        fabricants de chocolat du monde dans Azul : Maître Chocolatier !
      </p>
      <ul>
        <li>Alimentation</li>
        <li>Chocolat</li>
        <li>Combinaison</li>
        <li>Placement</li>
      </ul>
    </Styled>
  );
}
