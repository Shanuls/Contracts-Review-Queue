import React, {useState} from 'react';
import './LoginPage.css';
export default function LoginPage({onLogin}) {
 const [name,setName]=useState('');
 return <main className="queue-login"><form onSubmit={e=>{e.preventDefault();if(name.trim())onLogin();}} className="queue-login-card">
 <h1>Contract Review Login</h1><p>Demo access only. This login does not provide production security.</p>
 <label htmlFor="queue-login-name">Username</label><input id="queue-login-name" autoFocus required value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" />
 <button type="submit">Continue to Review Queue</button></form></main>;
}
