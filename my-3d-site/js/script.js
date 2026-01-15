const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('path/to/your/russian-doll-model.glb', function(gltf) {
    const model = gltf.scene;
    model.traverse(function(child) {
        if (child.isMesh) {
            child.material.color.set(0x0000ff); // Set the color to blue
        }
    });
    scene.add(model);
    model.rotation.y = Math.PI; // Initial rotation
});

camera.position.z = 5;

let rotationSpeed = 0.01;
let rotateDirection = 1;

function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += rotationSpeed * rotateDirection;
    renderer.render(scene, camera);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        rotateDirection = -1; // Rotate left
    } else if (event.key === 'ArrowRight') {
        rotateDirection = 1; // Rotate right
    }
});

animate();