const Box = (props) => {
  //  Write your code here.
  const { boxClass, boxM, boxText } = props;
  return (
    <div className={boxClass} id={boxM}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-main-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxClass="square-box" boxM="box-small" boxText="Small" />
      <Box boxClass="square-box" boxM="box-medium" boxText="Medium" />
      <Box boxClass="square-box" boxM="box-large" boxText="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
