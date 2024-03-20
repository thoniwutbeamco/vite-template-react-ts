import AnimatedCharacters from "../AnimatedCharacters";
import { Fireworks } from "@fireworks-js/react";
import type { FireworksHandlers } from "@fireworks-js/react";
import { useRef } from "react";
function Page2() {
  const ref = useRef<FireworksHandlers>(null);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <AnimatedCharacters />;
      <Fireworks
        ref={ref}
        options={{ opacity: 1 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#000",
        }}
      />
    </div>
  );
}

export default Page2;
