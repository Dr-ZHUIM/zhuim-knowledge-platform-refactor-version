const boxStyle: React.CSSProperties = {
  backgroundColor: "rgb(224, 206, 247)",
  border: "5px solid rebeccapurple",
};

const childStyle: React.CSSProperties = {
  background: "rgba(255,255,255,.5)",
  border: "1px solid black",
  padding: 10,
};

export function FlexCase() {
  const flexBoxStyle: React.CSSProperties = {
    height: 300,
    gap: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={{ ...boxStyle, ...flexBoxStyle }}>
      <div style={childStyle}>子级元素1</div>
      <div style={childStyle}>子级元素2</div>
    </div>
  );
}

export function MarginCase() {
  const _boxStyle: React.CSSProperties = {
    width: "100%",
    height: 300,
  };

  const marginBoxStyle: React.CSSProperties = {
    width: "fit-content",
    marginInline: "auto",
    marginBlock: 10,
  };
  return (
    <div style={{ ...boxStyle, ..._boxStyle }}>
      <div style={{ ...childStyle, ...marginBoxStyle }}>子级元素1</div>
      <div style={{ ...childStyle, ...marginBoxStyle }}>子级元素2</div>
    </div>
  );
}

