// Curtain page transition — click any nav link to trigger
const { useEffect, useRef, useState } = React;

function Curtain() {
  const [word, setWord] = useState("BLACKFOX");
  const ref = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[data-curtain]");
      if (!a) return;
      e.preventDefault();
      setWord(a.getAttribute("data-curtain") || "BLACKFOX");
      const el = ref.current;
      el.animate([
        { transform: "translateY(100%)" },
        { transform: "translateY(0)" },
        { transform: "translateY(0)", offset: 0.5 },
        { transform: "translateY(-100%)" },
      ], { duration: 1400, easing: "cubic-bezier(0.7,0,0.3,1)" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="curtain" ref={ref}>
      <div className="curtain__word">{word}</div>
    </div>
  );
}

window.Curtain = Curtain;
