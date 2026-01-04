import { useRef } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import * as THREE from "three";

export default function Lights() {
    const lightRef = useRef(null!);

    useHelper(lightRef, THREE.PointLightHelper);

    return (
        <>
            <SpotLight
                color="blue"
                distance={6}
                angle={1.15}
                attenuation={0}
                anglePower={5.3}
            />

            <pointLight
                ref={lightRef}
                color="orange"
                intensity={3}
                position={[3, 2.5, 0]}
                castShadow
                shadow-mapSize={[2000, 2000]}
                distance={10}
                decay={1}
            />
        </>
    );
}
