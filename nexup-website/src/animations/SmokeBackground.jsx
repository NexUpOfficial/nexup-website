// NexUP Particle Smoke v1.0
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function NexUPSmokeCloud() {
  const ref = useRef();

  // Create around 3000 soft particles
  const positions = useMemo(() => {
    const count = 3000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10; // wider cloud
    }

    return arr;
  }, []);

  // Smooth multi-axis rotation
  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0007; // slow rotation
    ref.current.rotation.x += 0.0003;
    ref.current.rotation.z += 0.0002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        color="#4db8ff"          // Blue neon, subtle glow
        opacity={0.55}           // Soft smoke feel
      />
    </Points>
  );
}

export default function SmokeBackground() {
  return (
    <div className="smoke-wrapper">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <NexUPSmokeCloud />
      </Canvas>
    </div>
  );
}
