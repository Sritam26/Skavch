import "./OurGrowth.css";
import React, { useEffect, useState } from "react";

const Counter = ({ target, label, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let speed = Math.ceil(target / 100);
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += speed;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(currentCount);
    }, 50);
    return () => clearInterval(interval);
  }, [target, trigger]);

  return (
    <div className="counter-container">
      <div className="stat">{count}K</div> {/* Shows 35K instead of 35+ */}
      <div className="label">{label}</div>
    </div>
  );
};

const OurGrowth = () => {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    setTrigger((prev) => prev + 1);
  }, []);

  return (
    <section
      className="growth-section"
      onMouseEnter={() => setTrigger((prev) => prev + 1)}
    >
      <div className="growth-container">
        <h2>A Glimpse into Our Growth </h2>
        <div className="counter-wrapper">
          <Counter target={35} label="Businesses Reached" trigger={trigger} />
          <Counter target={20} label="Websites Generated" trigger={trigger} />
          <Counter target={15} label="Industries Served" trigger={trigger} />
          <Counter target={50} label="Projects Completed" trigger={trigger} />
        </div>
      </div>
    </section>
  );
};

export default OurGrowth;
