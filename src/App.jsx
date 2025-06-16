import React, { useState } from "react";
import { templates, vocab } from "./toi-data";

// ランダム語彙取得
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 入力優先でテンプレ埋め
function fillTemplate(template, vocab, customInput) {
  return template.replace(/\{(\w+)\}/g, (_, tag) => {
    // 入力があればそれを使う
    if (customInput[tag] && customInput[tag].trim() !== "") {
      return customInput[tag];
    }
    // なければ語彙バンクからランダム
    return vocab[tag] ? randomPick(vocab[tag]) : `{${tag}}`;
  });
}

const FIELDS = [
  { label: "主語(subject)", key: "subject" },
  { label: "動詞(verb)", key: "verb" },
  { label: "受動詞(passive)", key: "passive" },
  { label: "概念1(concept)", key: "concept" },
  { label: "概念2(concept2)", key: "concept2" },
  { label: "場所(place)", key: "place" },
  { label: "オブジェクト(object)", key: "object" },
  { label: "道具(tool)", key: "tool" },
  { label: "身体(body)", key: "body" },
];

export default function App() {
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState("");
  const [customInput, setCustomInput] = useState({
    subject: "", verb: "", passive: "", concept: "", concept2: "",
    place: "", object: "", tool: "", body: ""
  });

  // 入力値ハンドラ
  function handleInputChange(e, key) {
    setCustomInput({ ...customInput, [key]: e.target.value });
  }

  // 問い生成
  function generate() {
    const t = randomPick(templates);
    const question = fillTemplate(t.template || t, vocab, customInput);
    setCurrent(question);
    setHistory([question, ...history]);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  function clearInput() {
    setCustomInput({
      subject: "", verb: "", passive: "", concept: "", concept2: "",
      place: "", object: "", tool: "", body: ""
    });
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>TOI MAKER</h1>
      <div style={{ marginBottom: 20 }}>
        <strong>カスタム語彙入力（空欄でランダム）</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0" }}>
          {FIELDS.map(f => (
            <input
              key={f.key}
              type="text"
              value={customInput[f.key]}
              placeholder={f.label}
              onChange={e => handleInputChange(e, f.key)}
              style={{ flex: "1 0 48%", marginBottom: 4, padding: 6 }}
            />
          ))}
        </div>
        <button onClick={clearInput} style={{ fontSize: "0.9em", marginTop: 6 }}>入力クリア</button>
      </div>
      <button onClick={generate} style={{ padding: "8px 24px" }}>問いを生成</button>
      <div style={{ margin: "24px 0", fontSize: "1.2em", minHeight: 40 }}>
        <strong>{current}</strong>
        {current && (
          <button onClick={() => copyToClipboard(current)} style={{ marginLeft: 10 }}>コピー</button>
        )}
      </div>
      <h2>生成履歴</h2>
      <ol>
        {history.map((q, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {q}
            <button onClick={() => copyToClipboard(q)} style={{ marginLeft: 8, fontSize: "0.8em" }}>
              コピー
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
