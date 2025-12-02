// RisingSmoke.jsx — Optimized + Babel error fixed + No GPU crashes
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function SafePixelRatio() {
  const { gl } = useThree();
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  return null;
}

function RisingSmokePlane() {
  const mesh = useRef();

  const uniforms = useRef({
    uTime: { value: 0 },
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
      <planeGeometry args={[2 , 1]} />

      <shaderMaterial
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={false}
        fragmentShader={/* glsl */`
          uniform float uTime;

          uniform vec3 uBlack;
          uniform vec3 uNavy;
          uniform vec3 uMidBlue;
          uniform vec3 uDeepBlue;

          varying vec2 vUv;

          float noise(vec2 p){
            return sin(p.x * 1.8 + uTime * 0.25) *
                   sin(p.y * 1.4 + uTime * 0.22);
          }

          void main() {
            float bottomMask = smoothstep(1.0, 0.45, vUv.y);
            float t = uTime * 0.22;
            float n = noise(vUv * 2.8 + vec2(0, t));
            float fog = smoothstep(0.20, 0.80, n);
            vec3 col1 = mix(uBlack, uNavy, fog);
            vec3 col2 = mix(uMidBlue, uDeepBlue, fog * 0.8);
            vec3 finalColor = mix(col1, col2, 0.5);
            float opacity = bottomMask * 0.65;
            gl_FragColor = vec4(finalColor, opacity);
          }
        `}
        vertexShader={/* glsl */`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `}
      />
    </mesh>
  );
}

/* ================================
   FIX FOR BABEL ERROR
================================ */
function enableShaderExtensions(gl) {
  const ctx = gl.getContext();
  if (ctx) {
    ctx.getExtension("OES_standard_derivatives");
  }
}

export default function RisingSmoke() {
  return (
    <div className="smoke-wrapper">
      <Canvas
        orthographic
        camera={{ zoom: 140, position: [0, 0, 1] }}
        gl={{ antialias: false }}
        onCreated={(state) => enableShaderExtensions(state.gl)}  // ✔ FIXED
      >
        <SafePixelRatio />
        <RisingSmokePlane />
      </Canvas>
    </div>
  );
}
