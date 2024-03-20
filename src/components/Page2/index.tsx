import React, { useEffect, useState } from "react";
import "./FireworkAnimation.css";

const FireworkAnimation: React.FC = () => {
  const [fireworks, setFireworks] = useState<
    { id: number; position: number }[]
  >([]);

  useEffect(() => {
    const launchFirework = () => {
      const newFireworks: { id: number; position: number }[] = [];
      for (let i = 0; i < 10; i++) {
        const randomPosition = Math.floor(Math.random() * 100);
        newFireworks.push({ id: Date.now() + i, position: randomPosition });
      }
      setFireworks((prevFireworks) => [...prevFireworks, ...newFireworks]);

      setTimeout(() => {
        setFireworks((prevFireworks) =>
          prevFireworks.filter((firework) =>
            newFireworks.every((newFirework) => newFirework.id !== firework.id)
          )
        );
      }, 2000);
    };

    const interval = setInterval(() => {
      launchFirework();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="firework-container">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{ left: `${firework.position}%` }}
        ></div>
      ))}
    </div>
  );
};

export default FireworkAnimation;
