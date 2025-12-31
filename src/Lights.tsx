import { useRef } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

export default function Lights() {
    const lightRef = useRef(null!);
    const cubeRef = useRef<THREE.Mesh>(null!);

    useHelper(lightRef, THREE.PointLightHelper);

    const { speed } = useControls({
        speed: { value: 0, min: -10, max: 10 },
    });

    useFrame((_state, delta) => {
        cubeRef.current.rotation.y += speed * delta;
    });

    return (
        <>
            <mesh receiveShadow rotation-x={Math.PI / 4} ref={cubeRef}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"white"} />
            </mesh>

            <SpotLight
                color="blue"
                distance={6}
                angle={1.15}
                attenuation={0}
                anglePower={5.3}
            />

            <directionalLight
                ref={lightRef}
                color="orange"
                intensity={3}
                position={[3, 2.5, 0]}
                castShadow
                shadow-mapSize={[2000, 2000]}
            />
        </>
    );
}
