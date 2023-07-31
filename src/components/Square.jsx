export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
    const handleClick = () => {
      updateBoard(index);
    };
    return (
      <div onClick={handleClick} className={className} key={index}>
        <span className="square__content">{children}</span>
      </div>
    );
  };