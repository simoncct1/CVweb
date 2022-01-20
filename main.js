import * as THREE from "three";
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RepeatWrapping } from "three";
const scene = new THREE.Scene();
{
  const coloor = 0xffffff;  // white
  const density = 0.06;
  scene.fog = new THREE.FogExp2(coloor, density);
}
// scene.background = new THREE.Color( 0x464646 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const color = 0xFFFFFF;  // white

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#flex'),
  alpha: true,

  antialias: true
});
const textureLoader = new THREE.TextureLoader();
const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
let geometrye, materiale;

geometrye = new THREE.PlaneGeometry(1000,1000);
const texture3 = textureLoader.load( "floor.png" );
texture3.anisotropy = maxAnisotropy;
texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
texture3.repeat.set( 100,100 );
materiale = new THREE.MeshPhongMaterial({ color: 0xffffff , map: texture3});
const floor = new THREE.Mesh( geometrye, materiale );
floor.position.y = -7
floor.position.x = 100;
floor.rotation.x= -Math.PI/2
scene.add(floor);



// const material3 = new THREE.MeshPhongMaterial( { color: 0xffffff} );
// material3.opacity=0.02;
// const geometry3 = new THREE.BoxGeometry( 1000 , 1000 );
// const mesh3 = new THREE.Mesh( geometry3, material3 );
// mesh3.rotation.y = -Math.PI/2;
// mesh3.position.x = 200;
// scene.add( mesh3 );


renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);


let material;
const light = new THREE.PointLight( 0x464646,4, 160 );
light.position.set( 20,110,0 );
scene.add( light );

const ulight = new THREE.PointLight( 0x464646, 4, 160 );
ulight.position.set( -20, -110, 0 );
scene.add( ulight );

const controls = new OrbitControls( camera, renderer.domElement );


camera.position.set( -10,0,0 );
controls.maxPolarAngle = Math.PI - 1.6;
controls.minPolarAngle = 1.5;
controls.minAzimuthAngle = - Math.PI + 1,7; 
	controls.maxAzimuthAngle = - 1,7; 
controls.update();






		

		//ligths
	var mainRGB = 0xffffff;
	var intensity = 0.4;
material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x666666 } );



		const mainSuitcases = new THREE.PointLight( mainRGB, 0.8, 700 );
		mainSuitcases.position.x = 8;
    mainSuitcases.position.z= -8;
    mainSuitcases.position.y = 2;
		scene.add( mainSuitcases );

    const mainSuitcase = new THREE.PointLight( mainRGB, 0.8, 700 );
		mainSuitcase.position.x = 8;
    mainSuitcase.position.z= 8;
    mainSuitcase.position.y = 5;
		scene.add( mainSuitcase );

const alight = new THREE.AmbientLight( 0x4c4c4c, 3.5, 1900 ); // soft white light
alight.position.y = 2;
scene.add( alight );



 

  

  const texture1 = textureLoader.load( "cv.png" );
  const material1 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture1 } );
  material1.transparent = true;

  texture1.anisotropy = maxAnisotropy;
  texture1.wrapS = texture1.wrapT = THREE.RepeatWrapping;
  texture1.repeat.set( 1,1 );


  const texture2 = textureLoader.load( "cvfr.png" );
  const material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture2 } );
  material2.transparent = true;
  texture2.anisotropy = maxAnisotropy;
  texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
  texture2.repeat.set( 1,1 );

 

 
  const geometry = new THREE.PlaneGeometry( 15, 10, 10 );
  const mesh1 = new THREE.Mesh( geometry, material1 );
  mesh1.rotation.y = Math.PI/2;

  const geometry2 = new THREE.PlaneGeometry( 10, 14, 10 );
  const mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.rotation.y = -Math.PI/2;
  



  scene.add( mesh1 );

  scene.add( mesh2 );

  //logos

  const loader = new GLTFLoader();
  var mail= new THREE.Object3D();
  var github= new THREE.Object3D();
  var translate= new THREE.Object3D();
   var down= new THREE.Object3D();
   var zoom= new THREE.Object3D();
  loader.load( 'maillogo.glb', function ( gltf ) {
    mail = gltf.scene;
    gltf.scene.scale.set(1,1,1);
    gltf.scene.position.z= 6.1;
    gltf.scene.position.x= -4;
    gltf.scene.position.y= 1.8;
      scene.add( gltf.scene );
  
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );
    
  loader.load( 'github.glb', function ( gltf ) {
    github = gltf.scene;
    gltf.scene.scale.set(1.5,1.5,1.5);
    gltf.scene.position.z= -8;
      scene.add( gltf.scene );
  
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );
    loader.load( 'translate.glb', function ( gltf ) {
      translate = gltf.scene;
      gltf.scene.scale.set(1,1,1);
      gltf.scene.position.z=4.1;
      gltf.scene.position.x= -5.2;
      gltf.scene.position.y= -1.5;
        scene.add( gltf.scene );
    
      
      }, undefined, function ( error ) {
      
        console.error( error );
      
      } );
    loader.load( 'zoom.glb', function ( gltf ) {
  zoom= gltf.scene;
  
  //  var rotateZoom = new TWEEN.Tween(zoom.rotation)
  //  .to({ y:  "-" + Math.PI/2}, 1800)
  //  .delay(300)
  //  .onComplete(function() {
  //      if (Math.abs(zoom.rotation.y)>=2*Math.PI) {
  //        zoom.rotation.y =zoom.rotation.y % (2*Math.PI);
  //      }
  //  })
  //  .start();
//  rotateZoom.repeat(Infinity);
      gltf.scene.scale.set(1.7,1.7,1.7);
      gltf.scene.position.z= -9.1;
      gltf.scene.position.x= -2;
      gltf.scene.position.y= -3;
        scene.add( gltf.scene );
    
      
      }, undefined, function ( error ) {
      
        console.error( error );
      
      } );
    loader.load( 'download.glb', function ( gltf ) {
      down= gltf.scene;
      gltf.scene.scale.set(1.7,1.7,1.7);
      gltf.scene.position.z= -10;
      gltf.scene.position.x= -1;
      gltf.scene.position.y= 3.5;
        scene.add( gltf.scene );
    
      
      }, undefined, function ( error ) {
      
        console.error( error );
      
      } );

//interactions
let trslted = false;

function downvd(){
  document.getElementById("dl").click();
 

}

function trslt(){

if(trslted == false){

  var frOff = new TWEEN.Tween(mesh2.rotation)
  .to({ y: "-" + Math.PI}, 700)
  .delay(0)
  .onComplete(function() {
      if (Math.abs(mesh2.rotation.y)>=2*Math.PI) {
        mesh2.rotation.y =mesh2.rotation.y % (2*Math.PI);
      }
  })
  .start();
  var engON = new TWEEN.Tween(mesh1.rotation)
  .to({ y: "-" + Math.PI}, 700)
  .delay(0)
  .onComplete(function() {
      if (Math.abs(mesh1.rotation.y)>=2*Math.PI) {
        mesh1.rotation.y =mesh1.rotation.y % (2*Math.PI);
      }
  })
  .start();
 trslted = true;
}else{
  var engOff = new TWEEN.Tween(mesh1.rotation)
  .to({ y: "-" + Math.PI}, 600)
  .delay(0)
  .onComplete(function() {
      if (Math.abs(mesh1.rotation.y)>=2*Math.PI) {
        mesh1.rotation.y =mesh1.rotation.y % (2*Math.PI);
      }
  })
  .start();
  var frOn = new TWEEN.Tween(mesh2.rotation)
  .to({ y:  "-" +Math.PI}, 600)
  .delay(0)
  .onComplete(function() {
    if (Math.abs(mesh2.rotation.y)>=2*Math.PI) {
      mesh2.rotation.y =mesh2.rotation.y % (2*Math.PI);
    }
  })
  .start();
  trslted = false;
}
  console.log("éé");
}

window.addEventListener('click', onDocumentMouseDown, false);


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
let buttonOk = true ;

function onDocumentMouseDown() {
 
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  // && intersects[0].name == "down"
  if (intersects.length > 0 && intersects[0].object.name == "down") {
    downvd();
    
  }
  if (intersects.length > 0 && intersects[0].object.name == "mail") {
    window.open('mailto:simoncouclet@yahoo.com');
    
  }
  if (intersects.length > 0 && intersects[0].object.name == "github") {
    window.open("https://github.com/simoncct1");
    
  }
  if (intersects.length > 0 && intersects[0].object.name == "zoom") {
    document.getElementById("readMode").style.display = "block";
    
  }
  if (intersects.length > 0 && intersects[0].object.name == "trslt") {
    

    setTimeout(()=>{
      buttonOk = true; console.log(buttonOk);}, 605);
      console.log( buttonOk);
    if(buttonOk == true){
      buttonOk = false;  
      trslt();
     
    }
   
  }
}


  //animation

  // var up = false;
  // function getup(){
  //   if(mail.position.y <=0){
  //   mail.position.y +=0.0015;
  //   github.position.y +=0.0015;
  
  //   }
    
  //   if(mail.position.y >=0.0){
  //   up = true;
    
  //   }
  
  // }
  // function nevermind(){
  
  //   if(mail.position.y >=-0.5){
  //     mail.position.y -=0.0015;
  //    github.position.y -=0.0015;
    
  //     }
  //     if(mail.position.y <= -0.5){
  //       up= false;
  //       }
  // }

 

function animate(){
  requestAnimationFrame( animate );
	controls.update(); 
	// if(up == false){
  //   getup();
  //   }
  //   else if(up == true){
  //   nevermind();
  //   }
  
 github.rotation.y += 0.003;
 down.rotation.y -= 0.0025;
 mail.rotation.y -= 0.002;
 zoom.rotation.y -= 0.0025;
 translate.rotation.y += 0.003;
 TWEEN.update();

  renderer.render(scene, camera);
}



animate();

