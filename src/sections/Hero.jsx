import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import {calculateSizes} from "../constants/index.js"
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';
const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:768})
    const isTablet=useMediaQuery({minWidth:768,maxWidth:1024});
    const isSmall=useMediaQuery({maxWidth:440});
    
    const sizes = calculateSizes(isSmall,isMobile,isTablet);
    const x = useControls({
        
            positionX: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionY: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationX: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationY: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            rotationZ: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            scale: {
                value: 2.5,
                min: 0.1,
                max: 10,
                
            }
            
        
    });

    return (
        <section className='relative flex flex-col w-full min-h-screen'>
            <div className='flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space'>
                <p className='text-2xl font-medium text-center text-white sm:text-3xl font-generalsans'>
                    Hi, I am Sushanth <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>Dream ,Build , Inspire.</p>
            </div>
            <div className='absolute inset-0 w-full h-full'>
                {/*<Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HeroCamera>
                            <HackerRoom 
                            //position={[0, 0, 0]} 
                            //position={[x.positionX,x.positionY,x.positionZ]}
                            //scale={[0.07, 0.07, 0.07]}  // Preset scale
                            //rotation={[x.rotationX, x.rotationY,x.rotationZ]} 
                            //scale={[x.scale,x.scale,x.scale]}
                            position={sizes.deskPosition}
                            rotation={[0,- Math.PI,0]}
                            scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute left-0 right-0 z-10 w-full text-center bottom-10 '>
                <a href="#about" className='w-fit'>
                    <Button name="let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
                    
                </a>
            </div>
        </section>
    );
};

export default Hero;
