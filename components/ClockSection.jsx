"use client";
import React, { useEffect, useRef, useState } from "react";

const ClockSection = () => {
  const canvasRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const timeZone = "Asia/Dhaka"; // Specify your time zone here

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const drawClock = () => {
      const now = new Date();
      const ctx = context;
      const radius = canvas.height / 2;
      ctx.translate(radius, radius);
      ctx.clearRect(-radius, -radius, canvas.width, canvas.height);

      // Clock face
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();

      // Clock center
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = "#333";
      ctx.fill();

      // Draw numbers
      ctx.font = `${radius * 0.15}px arial`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let num = 1; num <= 12; num++) {
        const ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }

      // Hour hand
      let hour = now.getHours();
      hour = hour % 12;
      hour =
        (hour * Math.PI) / 6 +
        (now.getMinutes() * Math.PI) / (6 * 60) +
        (now.getSeconds() * Math.PI) / (360 * 60);
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);

      // Minute hand
      let minute =
        (now.getMinutes() * Math.PI) / 30 +
        (now.getSeconds() * Math.PI) / (30 * 60);
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);

      // Second hand
      let second = (now.getSeconds() * Math.PI) / 30;
      drawHand(ctx, second, radius * 0.9, radius * 0.02);

      ctx.translate(-radius, -radius);
    };

    const drawHand = (ctx, pos, length, width) => {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    };

    const updateTime = () => {
      const now = new Date();
      const timeOptions = {
        timeZone,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const dateOptions = {
        timeZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", timeOptions).format(now));
      setCurrentDate(new Intl.DateTimeFormat("en-US", dateOptions).format(now));
    };

    drawClock(); // Initial draw
    updateTime(); // Initial time update

    const interval = setInterval(() => {
      drawClock();
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="column_attr clearfix" style={{}}>
      <div className="mx-localize-time">
        <div className="mx-clock-europe-rome254 mx-clock-live-el">
          <canvas ref={canvasRef} width="120" height="120"></canvas>
          <div className="mx-current-time">{currentTime}</div>
          <div className="mx-time-zone">Rome</div>
          <div className="mx-elem-days">{currentDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ClockSection;
