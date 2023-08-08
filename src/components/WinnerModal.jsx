import { Square } from "./Square";
import PropTypes from 'prop-types';

export function WinnerModal({winner, resetGame}) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Draw" : "Won: "
  const winnerContent = winner && <Square>{winner}</Square>
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winnerContent}</header>
        <footer>
          <button onClick={resetGame}>Restart game</button>
        </footer>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  resetGame: PropTypes.func.isRequired,
};
