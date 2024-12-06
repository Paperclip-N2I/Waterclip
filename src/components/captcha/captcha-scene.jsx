import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const PixelShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "resolution": { value: new THREE.Vector2() },
    "pixelSize": { value: 1.0 }
  },
  vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
  fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 resolution;
        uniform float pixelSize;
        varying vec2 vUv;
        
        void main() {
            vec2 dxy = pixelSize / resolution;
            vec2 coord = dxy * floor(vUv / dxy);
            gl_FragColor = texture2D(tDiffuse, coord);
        }
    `
};

class ThreeScene extends React.Component {
  state = {
    numberOfFish: 0,
    fishCountInput: '',
    isCaptchaModalOpen: false,
    captchaValidated: false,
    errorMessage: ''
  };

  componentDidMount() {
    this.initThree();
    this.animate();
  }

  initThree = () => {
    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 2.5;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(600, 325);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0xffffff); // Set background color to white
    this.mount.appendChild(this.renderer.domElement);
  
    // Post-processing setup
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Add pixel shader pass
    const pixelPass = new ShaderPass(PixelShader);
    pixelPass.uniforms["resolution"].value = new THREE.Vector2(
      window.innerWidth,
      window.innerHeight
    );

    // Load GLTF model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/models/Box_Aquarium.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.model.position.y -= 0.5; 
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error('An error happened', error);
      }
    );

    // Load initial fish models
    this.loadFishModels();

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    this.scene.add(pointLight);

    // Add controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.controls.enableDamping = true;
    this.controls.enableZoom = true;

    // Set limits for orbit and zoom
    this.controls.minAzimuthAngle = -Math.PI / 4;
    this.controls.maxAzimuthAngle = Math.PI / 4;
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 2;

    // Handle window resize
    window.addEventListener('resize', this.handleWindowResize);
  }

  loadFishModels = () => {
    const loader = new GLTFLoader();
    const fishPaths = [
      '/models/fish1.glb',
      '/models/fish2.glb',
      '/models/fish3.glb',
      '/models/fish4.glb',
      '/models/fish5.glb',
      '/models/fish6.glb',
      '/models/fish7.glb',
      '/models/fish8.glb',
      '/models/fish9.glb',
      '/models/fish10.glb'
    ];

    // Shuffle and select a random number of fish
    const shuffledFishPaths = this.shuffleArray(fishPaths);
    const numberOfFish = Math.floor(Math.random() * fishPaths.length) + 1;
    
    // Update state to track the number of fish
    this.setState({ 
      numberOfFish, 
      errorMessage: '',
      isCaptchaModalOpen: true 
    });

    const selectedFishPaths = shuffledFishPaths.slice(0, numberOfFish);

    selectedFishPaths.forEach((path, index) => {
      loader.load(
        path,
        (gltf) => {
          const fish = gltf.scene;
          fish.name = `fish${index}`; // Assign a unique name to each fish
          fish.position.set(0, -0.5, 0); // Adjust the position of each fish
          this.scene.add(fish);
        },
        undefined,
        (error) => {
          console.error(`An error happened with ${path}`, error);
        }
      );
    });
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);

    // Update shader resolution
    const pixelPass = this.composer.passes.find(pass => pass.uniforms?.resolution);
    if (pixelPass) {
      pixelPass.uniforms.resolution.value.set(width, height);
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    // Update controls
    this.controls.update();

    // Render with post-processing
    this.composer.render();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    this.mount.removeChild(this.renderer.domElement);
  }

  reloadFish = () => {
    // Remove existing fish
    this.scene.children = this.scene.children.filter(child => !child.name.startsWith('fish'));

    // Load new fish models
    this.loadFishModels();

    // Reset state
    this.setState({ 
      fishCountInput: '',
      captchaValidated: false 
    });
  }

  handleFishCountSubmit = () => {
    const { numberOfFish, fishCountInput } = this.state;
    
    // Convert input to number and compare
    const inputCount = parseInt(fishCountInput, 10);

    if (inputCount === numberOfFish) {
      // Captcha validated
      this.setState({ 
        captchaValidated: true,
        isCaptchaModalOpen: false,
        errorMessage: '' 
      });
      // You can trigger any additional action here after validation
      console.log('Captcha validated successfully!');
      this.props.onSuccess();
    } else {
      // Incorrect count - reload fish and show error
      this.setState({
        errorMessage: 'Incorrect number of fish. Try again!',
        fishCountInput: ''
      });
      this.reloadFish();
    }
  }

  render() {
    const { fishCountInput, errorMessage, onSuccess } = this.state;
    console.log(onSuccess);
    return (
      <div className="relative">
        <div className='w-1/2 h-1/2 cursor-grabbing' ref={ref => (this.mount = ref)} />
        <p className="mt-2 cursor-default">Combien de poissons sont dans l'aquarium?</p>
        
        <input 
          type="number" 
          value={fishCountInput}
          onChange={(e) => this.setState({ fishCountInput: e.target.value })}
          className={`cursor-default w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 ${errorMessage ? 'border-red-500' : 'focus:ring-blue-500'}`}
          placeholder="Entrez le nombre de poissons"
        />
        
        {errorMessage && (
          <p className="text-red-500 mb-2">{errorMessage}</p>
        )}
        
        <div className="flex justify-between">
          <button 
            onClick={() => this.setState({ isCaptchaModalOpen: false })}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Annuler
          </button>
          <button 
            onClick={this.handleFishCountSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Valider
          </button>
        </div>
      </div>
    );
  }
}

export default ThreeScene;