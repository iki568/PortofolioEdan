import { useRef, useEffect, useState } from "react";

function SkillCard({ title, desc }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`skill-card ${isVisible ? "skill-card--visible" : ""}`}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default SkillCard;