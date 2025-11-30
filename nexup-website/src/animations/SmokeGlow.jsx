import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RisingSmokePlane() {
  const mesh = useRef();

  const uniforms = useRef({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#00040a") },   // deep black
    uColor2: { value: new THREE.Color("#0b2150") },   // dark blue
  }).current;

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        uniforms={uniforms}
        transparent
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          varying vec2 vUv;

          // Simple noise
          float noise(vec2 p){
            return sin(p.x * 2.0 + uTime * 0.5) *
                   sin(p.y * 3.0 + uTime * 0.8);
          }

          void main() {
            // Only bottom area
            float bottomMask = smoothstep(1.0, 0.2, vUv.y);

            // Rising smoke effect
            float t = uTime * 0.2;
            float n = noise(vUv * 3.0 + vec2(0, t));

            // Fade in & fade out
            float fade = smoothstep(0.2, 0.8, n);

            // Mix black + blue
            vec3 color = mix(uColor1, uColor2, fade);

            // Apply bottom fade mask
            gl_FragColor = vec4(color, bottomMask * 0.4);
          }
        `}
      />
    </mesh>
  );
}

export default function RisingSmoke() {
  return (
    <div className="smoke-wrapper">
      <Canvas
        orthographic
        camera={{ zoom: 180, position: [0, 0, 1] }}
        gl={{ antialias: true }}
      >
        <RisingSmokePlane />
      </Canvas>
    </div>
  );
}
