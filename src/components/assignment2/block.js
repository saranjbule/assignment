const Block = ({ id, update }) => {
  return <div onClick={() => update(id)}>{id}</div>;
};

export default Block;
