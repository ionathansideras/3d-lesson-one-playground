import { OrbitControls, SoftShadows, BakeShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";

function App() {
    return (
        <Canvas shadows>
            <BakeShadows />
            <SoftShadows samples={200} />
            <OrbitControls />
            <Lights />
            <mesh receiveShadow rotation-x={Math.PI / 4}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh scale={0.3} position={[1, 1, 0]} castShadow>
                <sphereGeometry />
                <meshStandardMaterial color={"white"} />
            </mesh>
        </Canvas>
    );
}

export default App;
