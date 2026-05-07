import React,{useState} from 'react';
export default function App(){
  const [score,setScore]=useState('');
  return <div style={{padding:20,fontFamily:'sans-serif'}}>
    <h1>ボウリングスコア</h1>
    <p>ZIP完成版です。ここから機能追加可能です。</p>
    <input value={score} onChange={e=>setScore(e.target.value)} placeholder="スコア入力"/>
    <div style={{marginTop:10}}>入力値: {score}</div>
  </div>
}