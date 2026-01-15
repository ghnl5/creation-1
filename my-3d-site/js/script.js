const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Body: CapsuleGeometry for Russian doll shape
const bodyGeometry = new THREE.CapsuleGeometry(0.5, 1.5, 4, 8);
const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);

// Head: SphereGeometry on top of body
const headGeometry = new THREE.SphereGeometry(0.4, 16, 16);
const headMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.set(0, 1.2, 0); // Position on top of body
scene.add(head);

// Eyes: Two small white spheres on the front of the head
const eyeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
leftEye.position.set(-0.15, 1.3, 0.35); // Front left
scene.add(leftEye);
const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
rightEye.position.set(0.15, 1.3, 0.35); // Front right
scene.add(rightEye);

camera.position.z = 5;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();