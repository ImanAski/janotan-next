import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls} from "@react-three/drei";
import {useRef} from "react";


const tiltedFrontPreview = {
    x: 0,
    y: -100,
    z: -50,
};

const staticSidePreview = {
    x: -1.50,
    y: -0,
    z: -1.60,
}


export default function Index({ previewMode, bookCover, bookSide, bookBack, bookTexture = "/images/books/book-texture.png" }) {
    return (
        <div className="h-[100vh]">
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} />
                <BookBox
                    previewMode={previewMode}
                    bookCoverInput={bookCover}
                    bookSideInput={bookSide}
                    bookBackInput={bookBack}
                    bookTextureInput={bookTexture}
                />
            </Canvas>
        </div>
    )
}

function changeToFrontView(meshRef, previewMode) {
    switch (previewMode) {
        case "tiltedFrontPreview":
            // meshRef.current.rotation.x = -85;
            meshRef.current.rotation.y = tiltedFrontPreview.y;
            meshRef.current.rotation.z = tiltedFrontPreview.z;
            break;
        case "staticSidePreview":
            meshRef.current.rotation.x = staticSidePreview.x;
            meshRef.current.rotation.y = staticSidePreview.y;
            meshRef.current.rotation.z = staticSidePreview.z;
            break;
        default:
            meshRef.current.rotation.x = 0;
            meshRef.current.rotation.y = 0;
            meshRef.current.rotation.z = 0;
    }


}
function BookBox({ previewMode, bookCoverInput, bookSideInput, bookBackInput, bookTextureInput }) {

    const mesh = useRef(null);
    useFrame((state, delta) => {
        changeToFrontView(mesh, previewMode);
    })

    const bookCover = useLoader(TextureLoader, bookCoverInput);
    // const bookCover = useLoader(TextureLoader, "/images/books/descartes/front.jpg");
    const bookSide = useLoader(TextureLoader, bookSideInput);
    // const bookSide = useLoader(TextureLoader, "/images/books/descartes/side.jpg");
    const bookBack = useLoader(TextureLoader, bookBackInput);
    // const bookBack = useLoader(TextureLoader, "/images/books/descartes/dback.jpg");
    const bookTexture = useLoader(TextureLoader, bookTextureInput);
    // const bookTexture = useLoader(TextureLoader, "/images/books/book-texture.png");
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