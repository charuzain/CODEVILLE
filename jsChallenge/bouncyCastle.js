/*Challenge #20 - Bouncy Castles
There's a new attraction at this year's town festival. The organizers have decided to bring in several inflatable attractions, but they have no clue how to much blow them up. Each attraction needs to be pumped to a precise volume to achieve maximum festival fun!

The attractions are each made up of a combination of several different shapes: cones, spheres and prisms. For example, the giant inflatable duck is made up of two spheres (the body and head) and a cone (the beak) 🦆.

Instructions
Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth
The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

Examples
Input:
    const sphere = {
      type: 'sphere',
      radius: 2
    }



    const sphereVolume =(radius)=> 4 * Math.PI()* r*r*
    sphereVolume(sphere.radius)
Output:
33.5102
Input:
    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    coneVolume(cone.radius, cone.height)
Output:
47.12385
Input:
    const prism = {
      type: 'prism',
      height: 3,
      width: 4,
      depth: 5
    }

    prismVolume(prism.height, prism.width, prism.depth)
Output:
60
Input:
    const largeSphere = {
      type: 'sphere',
      radius: 40
    }

    const smallSphere = {
      type: 'sphere',
      radius: 10
    }

    const cone = {
      type: 'cone',
      radius: 3,
      height: 5
    }

    const duck = [
      largeSphere,
      smallSphere,
      cone
    ]

    totalVolume(duck)
Output:
272318.257  */

const sphereVolume = (r)=> 4 * Math.PI * r * r * r / 3;
const coneVolume = (r,h)=> Math.PI * r * r * h / 3;
const prismVolume = (h,w,d)=>h * w * d;

const  totalVolume = (solids)=>{
  let totalVol = 0;
  for (let solid of solids) {
    if (solid.type === 'prism') {
      totalVol += prismVolume(solid.height,solid.width,solid.depth);
    } else if (solid.type === 'sphere') {
      totalVol += sphereVolume(solid.radius);
    } else {
      totalVol += coneVolume(solid.radius,solid.height);
    }
  }
  return totalVol;
};



const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];


console.log(totalVolume(duck))
