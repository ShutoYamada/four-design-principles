import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  // 近接
  const [isNear, setNear] = useState(false);
  // 整列
  const [isFormat, setFormat] = useState(false);
  // 反復
  const [isRepeat, setRepeat] = useState(false);
  // 強調
  const [isStrong, setStrong] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shuto Yamadaのおすすめミステリ作家/本</h1>
        <div
          style={{
            marginTop: isNear ? 12 : 2,
            marginBottom: isNear ? 12 : 2,
            width: isFormat ? "55%" : "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "left",
              fontSize: isStrong ? 20 : 16,
              fontWeight: isStrong ? "bold" : "normal",
              backgroundColor: isStrong ? "rgb(255,139,80)" : "transparent",
            }}
          >
            {`${isRepeat ? "●" : "★"}綾辻行人`}
          </p>
          <p style={{ margin: 0, textAlign: "left" }}>
            十角館の殺人、時計館の殺人、Another
          </p>
        </div>
        <div
          style={{
            marginTop: isNear ? 12 : 2,
            marginBottom: isNear ? 12 : 2,
            width: isFormat ? "55%" : "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "left",
              textDecoration: isRepeat ? "none" : "underline",
              fontSize: isStrong ? 20 : 16,
              fontWeight: isStrong ? "bold" : "normal",
              backgroundColor: isStrong ? "rgb(255,139,80)" : "transparent",
            }}
          >
            {`${isRepeat ? "●" : "☆"}有栖川有栖`}
          </p>
          <p style={{ margin: 0, textAlign: "left" }}>
            スイス時計の謎、月光ゲーム、双頭の悪魔
          </p>
        </div>
        <div
          style={{
            marginTop: isNear ? 12 : 2,
            marginBottom: isNear ? 12 : 2,
            width: isFormat ? "55%" : "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "left",
              color: isRepeat ? "white" : "yellow",
              fontSize: isStrong ? 20 : 16,
              fontWeight: isStrong ? "bold" : "normal",
              backgroundColor: isStrong ? "rgb(255,139,80)" : "transparent",
            }}
          >
            {`${isRepeat ? "●" : "◯"}麻耶雄嵩`}
          </p>
          <p style={{ margin: 0, textAlign: "left" }}>
            翼ある闇、蛍、神様ゲーム
          </p>
        </div>
        <div
          style={{
            marginTop: isNear ? 12 : 2,
            marginBottom: isNear ? 12 : 2,
            width: isFormat ? "55%" : "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "left",
              fontSize: isStrong ? 20 : 16,
              fontWeight: isStrong ? "bold" : "normal",
              backgroundColor: isStrong ? "rgb(255,139,80)" : "transparent",
            }}
          >
            {`${isRepeat ? "●" : "■"}歌野晶午`}
          </p>
          <p
            style={{
              margin: 0,
              textAlign: "left",
              color: isRepeat ? "white" : "green",
            }}
          >
            密室殺人ゲーム、葉桜の季節に君を想うということ
          </p>
        </div>
        <div
          style={{
            marginTop: 12,
            marginBottom: 12,
            width: isFormat ? "55%" : "auto",
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "left",
              fontSize: isStrong ? 20 : 16,
              fontWeight: isStrong ? "bold" : "normal",
              backgroundColor: isStrong ? "rgb(255,139,80)" : "transparent",
            }}
          >
            {`${isRepeat ? "●" : "□"}東野圭吾`}
          </p>
          <p style={{ margin: 0, textAlign: "left" }}>
            秘密、容疑者Xの献身、どちらかが彼女を殺した
          </p>
        </div>
        <h1>デザイン基本4原則のパターンを当てはめる</h1>
        <form>
          <label style={{ margin: 10 }}>
            近接:
            <input
              type="checkBox"
              checked={isNear}
              name="near"
              onChange={(e) => {
                setNear(e.target.checked);
              }}
            />
          </label>
          <label style={{ margin: 10 }}>
            整列:
            <input
              type="checkBox"
              checked={isFormat}
              name="format"
              onChange={(e) => {
                setFormat(e.target.checked);
              }}
            />
          </label>
          <label style={{ margin: 10 }}>
            反復:
            <input
              type="checkBox"
              checked={isRepeat}
              name="repeat"
              onChange={(e) => {
                setRepeat(e.target.checked);
              }}
            />
          </label>
          <label style={{ margin: 10 }}>
            強調:
            <input
              type="checkBox"
              checked={isStrong}
              name="strong"
              onChange={(e) => {
                setStrong(e.target.checked);
              }}
            />
          </label>
        </form>
      </header>
    </div>
  );
};

export default App;
