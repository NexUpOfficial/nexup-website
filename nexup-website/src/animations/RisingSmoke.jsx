// RisingSmoke.jsx — NexUP Smoke V4 (40% more visibility + gradients)
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RisingSmokePlane() {
  const mesh = useRef();

  const uniforms = useRef({
    uTime: { value: 0 },

    // Gradient colors
    uBlack: { value: new THREE.Color("#000000") },
    uNavy: { value: new THREE.Color("#07101c") },
    uMidBlue: { value: new THREE.Color("#0a1f3a") },
    uDeepBlue: { value: new THREE.Color("#14345a") },
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

          uniform vec3 uBlack;
          uniform vec3 uNavy;
          uniform vec3 uMidBlue;
          uniform vec3 uDeepBlue;

          varying vec2 vUv;

          // smoother fog noise
          float noise(vec2 p){
            return sin(p.x * 1.8 + uTime * 0.25) *
                   sin(p.y * 1.4 + uTime * 0.22);
          }

          void main() {
            // Only bottom 45% fog area
            float bottomMask = smoothstep(1.0, 0.45, vUv.y);

            // Rising fog motion
            float t = uTime * 0.22;
            float n = noise(vUv * 2.8 + vec2(0, t));

            // stronger fade for heavier fog
            float fog = smoothstep(0.20, 0.80, n);

            // GRADIENT BLENDING (Black → Navy → Midnight Blue → Deep Blue)
            vec3 col1 = mix(uBlack, uNavy, fog);
            vec3 col2 = mix(uMidBlue, uDeepBlue, fog * 0.8);

            vec3 finalColor = mix(col1, col2, 0.5);

            // 40% more visibility (opacity boost)
            float opacity = bottomMask * 0.65;  // was 0.45

            gl_FragColor = vec4(finalColor, opacity);
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
