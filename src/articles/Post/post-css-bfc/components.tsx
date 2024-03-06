const floatBox: React.CSSProperties = {
  backgroundColor: "rgb(224, 206, 247)",
  border: "5px solid rebeccapurple",
};

const container: React.CSSProperties = {
  height: 150,
};

const bfcScenario_1: React.CSSProperties = {
  overflow: "hidden",
};

const bfcScenario_2: React.CSSProperties = {
  display: "flow-root",
};

const floatItem: React.CSSProperties = {
  float: "left",
  width: 100,
  height: 100,
  background: "rgba(255,255,255,.5)",
  border: "1px solid black",
  padding: 10,
};

export function FloatCollapse() {
  return (
    <div style={floatBox}>
      <div style={floatItem}>浮动一</div>
      <div style={floatItem}>浮动二</div>
    </div>
  );
}

export function FloatHeightContentFit() {
  return (
    <div style={{ ...floatBox, ...bfcScenario_1 }}>
      <div style={floatItem}>浮动一</div>
      <div style={floatItem}>浮动二</div>
    </div>
  );
}

export function ElementOverlap() {
  return (
    <div style={container}>
      <div style={floatItem}>浮动</div>
      <div style={floatBox}>普通</div>
    </div>
  );
}

export function ExcludeFloat() {
  return (
    <div style={container}>
      <div style={floatItem}>浮动</div>
      <div style={{ ...floatBox, ...bfcScenario_2 }}>普通</div>
    </div>
  );
}

