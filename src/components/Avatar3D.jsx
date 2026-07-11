import React, { useEffect, useRef, useState } from "react";

/*
 * Avatar3D — a circular portrait that tilts in 3D space toward the cursor,
 * giving the illusion of a floating avatar that "looks toward" the mouse.
 * Tracks mousemove on the whole window so it reacts even before the cursor
 * reaches the avatar itself, then eases back to neutral on touch devices
 * (no mouse) or when the pointer leaves the window.
 */
function Avatar3D({ className = "" }) {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const maxTilt = 16; // degrees

    function handleMove(e) {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      setTilt({
        x: Math.max(-1, Math.min(1, -dy)) * maxTilt,
        y: Math.max(-1, Math.min(1, dx)) * maxTilt,
      });
    }

    function handleLeave() {
      setTilt({ x: 0, y: 0 });
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      style={{ perspective: "700px" }}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden border-4 border-violet-300 dark:border-violet-600 shadow-[0_15px_35px_-10px_rgba(139,92,246,0.45)] transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/avatar-hero.jpg"
          alt="3D avatar of Bejawi Aziz"
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Avatar3D;
