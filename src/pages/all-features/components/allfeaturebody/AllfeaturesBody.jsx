import React, { useState, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  letterA,
  letterB,
  letterC,
  letterD,
  letterE,
  letterG,
  letterI,
  letterL,
  letterM,
  letterN,
  letterP,
  letterQ,
  letterR,
  letterS,
  letterT,
} from "./Allfeatures";
import FeatureBox from "./FeatureBox";
import "./allfeaturesbody.css";

const alphabets1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const alphabets2 = ["M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];

export default function AllfeaturesBody() {
  const [showSet, setShowSet] = useState(false);

  return (
    <div className="allfeatures__main--container">
      <div className="allfeatures__btn--wrapper">
        {!showSet ? (
          <div className="letter__btn--container">
            {alphabets1.map((alphabet) => (
              <a href={`#${alphabet}`} key={alphabet}>
                {alphabet}
              </a>
            ))}
          </div>
        ) : (
          <div className="letter__btn--container">
            {alphabets2.map((alphabet) => (
              <a href={`#${alphabet}`}> {alphabet}</a>
            ))}
          </div>
        )}

        <div className="btn__letters--change">
          <button onClick={() => setShowSet(!showSet)}>
            {showSet ? <SlArrowUp /> : <SlArrowDown />}
          </button>
        </div>
      </div>

      <div className="allfeatures__letters" id="A">
        <div className="allfeatures__letter">
          <h1>A</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterA.map((a) => (
            <FeatureBox key={a.id} data={a} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="B">
        <div className="allfeatures__letter">
          <h1>B</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterB.map((b) => (
            <FeatureBox key={b.id} data={b} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="C">
        <div className="allfeatures__letter">
          <h1>C</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterC.map((c) => (
            <FeatureBox key={c.id} data={c} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="D">
        <div className="allfeatures__letter">
          <h1>D</h1>
        </div>
        <div id="D" className="allfeatures__letters--container">
          {letterD.map((d) => (
            <FeatureBox key={d.id} data={d} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="E">
        <div className="allfeatures__letter">
          <h1>E</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterE.map((e) => (
            <FeatureBox key={e.id} data={e} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="G">
        <div className="allfeatures__letter">
          <h1>G</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterG.map((g) => (
            <FeatureBox key={g.id} data={g} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="I">
        <div className="allfeatures__letter">
          <h1>I</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterI.map((i) => (
            <FeatureBox key={i.id} data={i} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="L">
        <div className="allfeatures__letter">
          <h1>L</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterL.map((l) => (
            <FeatureBox key={l.id} data={l} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="M">
        <div className="allfeatures__letter">
          <h1>M</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterM.map((m) => (
            <FeatureBox key={m.id} data={m} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="N">
        <div className="allfeatures__letter">
          <h1>N</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterN.map((n) => (
            <FeatureBox key={n.id} data={n} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="P">
        <div className="allfeatures__letter">
          <h1>P</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterP.map((p) => (
            <FeatureBox key={p.id} data={p} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="Q">
        <div className="allfeatures__letter">
          <h1>Q</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterQ.map((q) => (
            <FeatureBox key={q.id} data={q} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="R">
        <div className="allfeatures__letter">
          <h1>R</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterR.map((r) => (
            <FeatureBox key={r.id} data={r} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="S">
        <div className="allfeatures__letter">
          <h1>S</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterS.map((s) => (
            <FeatureBox key={s.id} data={s} />
          ))}
        </div>
      </div>
      <div className="allfeatures__letters" id="T">
        <div className="allfeatures__letter">
          <h1>T</h1>
        </div>
        <div className="allfeatures__letters--container">
          {letterT.map((t) => (
            <FeatureBox key={t.id} data={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
