import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls} from "@react-three/drei";
import {useRef} from "react";


export default function Index() {
    return (
        <div className="h-[100vh]">
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} />
                <BookBox />
            </Canvas>
        </div>
    )
}

function changeToFrontView(meshRef) {
    // meshRef.current.rotation.x = -85;
    meshRef.current.rotation.y = -100;
    meshRef.current.rotation.z = -50;

}
function BookBox() {

    const mesh = useRef(null);
    useFrame((state, delta) => {
        changeToFrontView(mesh);
        // console.log(delta)
        // mesh.current.rotation.x += delta * 0.1;
        // mesh.current.rotation.y += delta * 0.1;
        // mesh.current.rotation.z += delta * 0.1;


    })

    const bookCover = useLoader(TextureLoader, "/images/books/descartes/front.jpg");
    const bookSide = useLoader(TextureLoader, "/images/books/descartes/side.jpg");
    const bookBack = useLoader(TextureLoader, "/images/books/descartes/dback.jpg");
    const bookTexture = useLoader(TextureLoader, "/images/books/book-texture.png");
    return (
        <mesh ref={mesh}>
            <boxGeometry args={[3.5, 5, 0.5]}/>
            <meshStandardMaterial map={bookCover} attach="material-4"/>
            <meshStandardMaterial map={bookSide} attach="material-0"/>
            <meshStandardMaterial map={bookTexture} attach="material-1"/>
            <meshStandardMaterial map={bookTexture} attach="material-2"/>
            <meshStandardMaterial map={bookTexture} attach="material-3"/>
            <meshStandardMaterial map={bookBack} attach="material-5"/>

        </mesh>
    )
}