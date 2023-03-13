import React, { useState, useRef, useEffect } from 'react';
import * as THREE from "three";
import {gsap} from "gsap";

import portrait from './portraitImg';
import ImprovedNoise from './improvedNoise';
import { EffectComposer, SelectiveBloomEffect, GlitchEffect, RenderPass, ChromaticAberrationEffect, EffectPass, SMAAEffect, NoiseEffect, BlendFunction, DepthEffect, VignetteEffect, TextureEffect, DepthOfFieldEffect } from "postprocessing";


export default function GlitchBoy() {

    let mountRef = useRef(null);
    let height;
    let width;
    let scene;
    let camera;
    let renderer;
    let material;
    let material2;
    let light;
    let light2;
    let light3;
    let ball;
    let geometry;
    let frameId;
    let tanFOV;
    let mouse;
    let windowHeight;
    let composer;
    let v3 = new THREE.Vector3();
    let renderPass;
    let glitchEffect;
    let pos;
    let nPos = [];
    let noise;
    let clock = new THREE.Clock();
    let radius = 180;


    // Called just once the component is mounted
    useEffect(() => {

        width = mountRef.current.clientWidth;
        height = mountRef.current.clientHeight;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        geometry = new THREE.IcosahedronGeometry(190, 5);

        pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            v3.fromBufferAttribute(pos, i).normalize();
            nPos.push(v3.clone());
        }
        geometry.userData.nPos = nPos;
        noise = ImprovedNoise();


        material = new THREE.MeshPhongMaterial({
            emissive: 0xee7a56,
            emissiveIntensity: 0.4,
            shininess: 0
        });
        material2 = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x9d553f
        });

        ball = new THREE.Mesh(geometry, material);
        // Lights
        light = new THREE.DirectionalLight(0xee7a56, 0.5);
        light2 = light.clone();
        light3 = new THREE.HemisphereLight(0xffab5b, 0x0c056d, 0.2);
        light.position.set(200, 300, 400);
        light2.position.set(-200, 300, 400);
        light3.position.set(200, 300, 400);
        scene.add(light);
        scene.add(light2);
        scene.add(light3);
        // Boy
        // Image texture loaded via dara URI due to no way to do it importing the image into NextJS
        let spriteMap = new THREE.TextureLoader().load(portrait);
        let spriteMaterial = new THREE.SpriteMaterial({
            map: spriteMap,
            color: 0xffffff
        });
        let sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(100, 100, 1);
        scene.add(sprite);
        sprite.position.x = 0;
        sprite.position.y = -10;
        sprite.position.z = 250;
        // Ball
        scene.add(ball);
        ball.position.x = -100;
        light.position.set(200, 300, 400);
        scene.add(light);
        light2.position.set(-200, 300, 400);
        scene.add(light2);
        camera.position.set(0, 0, 300);
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);

        mouse = new THREE.Vector2(0.8, 0.5);

        mountRef.current.appendChild(renderer.domElement);

        start();
        postprocessing();
        tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));
        windowHeight = window.innerHeight;
        window.addEventListener("resize", updateDimensions);
        // returned function will be called on component unmountRef 
        return () => {
            stop();
            if (mountRef.current != null) {
                mountRef.current.removeChild(renderer.domElement);
            }
        }
    }, []);

    const start = () => {
        gsap.from(mountRef.current, { duration: 2, opacity: 0, delay: 0.1 });
        console.log("start");
        setTimeout(startGlitch, 5000);
        if (!frameId) {
            frameId = requestAnimationFrame(animate);
        }
    };
    const stop = () => {
        console.log("stop");
        cancelAnimationFrame(frameId);
    };

    const postprocessing = () => {
        console.log("postprocessing");
        composer = new EffectComposer(renderer);
        renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const chromaticAberrationEffect = new ChromaticAberrationEffect();
        glitchEffect = new GlitchEffect({
            chromaticAberrationOffset: chromaticAberrationEffect.offset,
        });
        glitchEffect.mode = 0;
        glitchEffect.columns = 0;
        const noiseEffect = new NoiseEffect({
            blendFunction: BlendFunction.COLOR_DODGE
        });
        noiseEffect.blendMode.opacity.value = 0.1;
        // const bloomEffect = new SelectiveBloomEffect(scene, camera, {
		// 	blendFunction: BlendFunction.ADD,
		// 	mipmapBlur: true,
		// 	luminanceThreshold: 0.2,
		// 	luminanceSmoothing: 0.6,
		// 	intensity: 0.7
		// });
        // bloomEffect.inverted = true;
        // const depthOfFieldEffect = new DepthOfFieldEffect(camera, {
		// 	focusDistance: 0.0,
		// 	focalLength: 0.02,
		// 	bokehScale: 2.0,
		// 	height: 480
		// });

		// const depthEffect = new DepthEffect({
		// 	blendFunction: BlendFunction.SKIP
		// });

		// const vignetteEffect = new VignetteEffect({
		// 	eskil: false,
		// 	offset: 0.35,
		// 	darkness: 0.5
		// });

		// const cocTextureEffect = new TextureEffect({
		// 	blendFunction: BlendFunction.SKIP,
		// 	texture: depthOfFieldEffect.renderTargetCoC.texture
		// });

		// const DOFeffectPass = new EffectPass(
		// 	camera,
		// 	depthOfFieldEffect,
		// 	vignetteEffect,
		// 	cocTextureEffect,
		// 	depthEffect
		// );

        const glitchPass = new EffectPass(camera, glitchEffect, noiseEffect);
        const chromaticAberrationPass = new EffectPass(camera, chromaticAberrationEffect);
		// const bloomEffectPass = new EffectPass(camera, bloomEffect);
		
        composer.addPass(glitchPass);
        composer.addPass(chromaticAberrationPass);
        // composer.addPass(bloomEffectPass);
        // composer.addPass(DOFeffectPass);

    }

    const updateDimensions = () => {
        if (mountRef.current != null) {
            width = mountRef.current.offsetWidth;
            height = mountRef.current.offsetHeight;
        }
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        camera.lookAt(scene.position);
        composer.setSize(window.innerWidth, window.innerHeight);
    }



    const startGlitch = () => {
        setTimeout(stopGlitch, 600);

        if (ball.material == material) {
            ball.material = material2;
        } else {
            ball.material = material;
        }
        glitchEffect.mode = 2;
    }

    const stopGlitch = () => {
        setTimeout(startGlitch, 5000);
        glitchEffect.mode = 0;
    }



    const updateVertices = (timestamp) => {
        let t = clock.getElapsedTime() * .25;
        let amount = 50 + (mouse.x*100);
        geometry.userData.nPos.forEach((p, idx) => {
            let ns = noise.noise(p.x + t, p.y + t, p.z + t);
            v3.copy(p).multiplyScalar(radius).addScaledVector(p, ns * amount);
            pos.setXYZ(idx, v3.x, v3.y, v3.z);
        })

        pos.needsUpdate = true;
        // facetado
        geometry.computeVertexNormals();

    }

    const clickCanvas = () => {

    }

    const onMouseMove = e => {
        gsap.to(mouse, {
            duration: 0.5,
            y: e.screenY / height,
            x: e.screenX / width,
            ease: 'power1.easeOut'
        });
    };

    const animate = timestamp => {
        ball.rotation.x += 0.01;
        ball.rotation.y += 0.01;
        updateVertices(timestamp);
        renderScene();
        frameId = window.requestAnimationFrame(animate);
    };

    const renderScene = () => {
        composer.render();
    }
    return (
        <div
            className="h-full w-full"
            ref={mountRef}
            onMouseMove={onMouseMove}
            onClick={clickCanvas}
        />
    )

}
