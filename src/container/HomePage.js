"use client";
import { useState } from "react";

export default function HomePage() {
  const [isJoin, setIsJoin] = useState(false);

  return (
    <div className="home-page-backgroud">
      <div className="box">
        <div className="home-page-typing">
          <div className="content">
            <h1>
              Welcome to NRCA <span>(Nattawat Realtime Chat Application)</span>
            </h1>
          </div>
        </div>
        <div className="home-page-session">
          <div
            className="session-box"
            style={isJoin ? { opacity: "0", zIndex: "-1" } : { opacity: "1" }}>
            Create Session
          </div>
          <div
            className="session-box"
            style={isJoin ? { opacity: "0", zIndex: "-1" } : { opacity: "1" }}
            onClick={() => setIsJoin(!isJoin)}>
            Join Session
          </div>
        </div>
        <div
          className="home-page-join-session"
          style={
            isJoin
              ? { opacity: "1", zIndex: "1" }
              : { opacity: "0", zIndex: "-2" }
          }>
          <div className="session-content">Join Content</div>
          <input
            type="text"
            name="session"
            placeholder="Enter Session"
            className="session-box"></input>
          <div className="session-button-position">
            <div className="session-button">JOIN</div>
            <div className="session-button" onClick={() => setIsJoin(false)}>
              CANCEL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
