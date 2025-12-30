import { useRef } from "react";
import { SpotLight, useHelper } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

export default function Lights() {
    const lightRef = useRef(null!);

    useHelper(lightRef, THREE.PointLightHelper);

    const { position } = useControls({
        position: [3, 2.5, 0],
    });

    return (
        <>
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
                position={position}
                castShadow
                shadow-mapSize={[2000, 2000]}
            />
        </>
    );
}
