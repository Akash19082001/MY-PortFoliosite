import React from "react";

export default function InfiniteScrollAnimation() {
  return (
    <div className="hidden md:block flex-col items-center justify-center text-slate-50">
      <div className=" w-[47rem] max-w-[200vw] flex flex-col gap-4 relative py-6 overflow-hidden">
        <div className="loop-slider" style={{ "--duration": "43000ms", "--direction": "normal" }}>
          <div className="inner flex animate-loop" style={{ animationDirection: "var(--direction)", animationDuration: "var(--duration)" }}>
            <div className="tag"># JavaScript</div>
            <div className="tag"># Express</div>
            <div className="tag"># Node.js</div>
            <div className="tag"># mongoDb</div>
            <div className="tag"># UI/UX</div>
            {/* Duplicated content */}
            <div className="tag"># JavaScript</div>
            <div className="tag"># Express</div>
            <div className="tag"># Node.js</div>
            <div className="tag"># mongoDb</div>
            <div className="tag"># UI/UX</div>
          </div>
        </div>
        <div className="loop-slider" style={{ "--duration": "20000ms", "--direction": "reverse" }}>
          <div className="inner flex animate-loop" style={{ animationDirection: "var(--direction)", animationDuration: "var(--duration)" }}>
            <div className="tag"># java</div>
            <div className="tag"># postman</div>
            <div className="tag"># JavaScript</div>
            <div className="tag"># Tailwind</div>
            <div className="tag"># Aws</div>
            {/* Duplicated content */}
            <div className="tag"># java</div>
            <div className="tag"># postman</div>
            <div className="tag"># JavaScript</div>
            <div className="tag"># Tailwind</div>
            <div className="tag"># Aws</div>
          </div>
        </div>
        
        {/* Add more sliders as needed */}
      </div>
      <div className="fade absolute inset-0 pointer-events-none bg-gradient-to-r via-transparent"></div>
    </div>
    
  );
}
