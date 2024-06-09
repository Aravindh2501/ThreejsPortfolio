import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { HomeName, HomeRole } from "../content/content";

const TorusKnot = () => {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    void main() {
      vec3 color1 = vec3(139.0 / 255.0, 92.0 / 255.0, 246.0 / 255.0);
      vec3 color2 = vec3(253.0 / 255.0, 186.0 / 255.0, 116.0 / 255.0);
      vec3 color = mix(color1, color2, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
  });

  return (
    <mesh
      ref={mesh}
      scale={clicked ? 1.5 : 1}
      onClick={() => setClick(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      material={material}
    >
      <torusKnotGeometry args={[5, 1.5, 100, 16]} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <h5>I'm</h5>
        <h1>{HomeRole}</h1>
        <h2>{HomeName}</h2>
      </div>
      <Canvas className="canvas" camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <TorusKnot />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
