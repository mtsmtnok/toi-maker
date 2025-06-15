import React, { useState } from "react";
import { templates, vocab } from "./toi-data";

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(template, vocab) {
  // {subject} などをランダム語彙で埋める
  return template.replace(/\{(\w+)\}/g, (_, tag) => {
    return vocab[tag] ? randomPick(vocab[tag]) : `{${tag}}`;
  });
}

export default function App() {
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState("");

  function generate() {
    const t = randomPick(templates);
    const question = fillTemplate(t, vocab);
    setCurrent(question);
    setHistory([question, ...history]);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>TOI MAKER</h1>
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
