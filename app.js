const animals = [
  {
    name: 'Teddy',
    type: 'dog',
    naps: 0
  },
  {
    name: 'Jeffe',
    type: 'cat',
    naps: 0
  },
  {
    name: 'Spoons',
    type: 'lizard',
    naps: 0
  }
]

// NOTE make writing function easier for yourself by pseudo-coding out what you think needs to happen FIRST before you write any code, if you're not sure what needs to happen, look at a reference and create some steps!

// This function is going to put my animal objects on the page
function drawAnimals() {
  // NOTE usually templates only exist in draw function when we want to template something out (i.e. put something on the page)
  // need to create a variable thats going to hold HTML that I want on the page
  // NOTE right now our template is empty we will add to it during our loop
  let template = ''
  // target our array to grab each individual animal using an array method - usually a forEach
  // NOTE we are using backticks because we need multiple lines AND more importantly because we need to string interpolate = ${}
  // NOTE this is similar to grabbing the individual object at its position in the array -> let Teddy = animals[0] BUT this only works ONE time, so using a loop is better
  //IN PLAIN ENGLISH --> in our animals array, grab a single object (a OR animal), send (=>) that single animal 'a' through our template and add/apply our HTML to it each time it loops (it will loop for however many objects are in our array)
  animals.forEach(a => template += `
      <div>
        <h1>${a.name}</h1>
        <p>type: <span>${a.type}</span></p>
        <p>naps: <span>${a.naps}</span> </p>
        <div>
          <button class="btn btn-warning" onclick="giveNap('${a.name}')">Give Nap</button>
        </div>
      </div>
  `)
  // a forEach will allow me to loop through my array and print out OR draw (in this case) whatever is in my template one at a time for each object in the array
  // NOTE now we have objects and HTML in our template we need to put it on the page using its Id 
  // target the index document and update the page with the provided Id
  // @ts-ignore
  document.getElementById('animals').innerHTML = template
}
// NOTE make sure to invoke the function so it runs!
drawAnimals()


// NOTE in the above template we have a button, this button takes in an 'argument' that is the animals name (a.name)
// NOTE if we forget the argument we will have an 'UNDEFINED' error


// NOTE the function is taking in the 'parameter' animalName
// NOTE if we forget the parameter we will see the animals name BUT with a red HTML error that essentially says 'where did this name come from?'
function giveNap(animalName) {
  // console.log('its nap time', animalName);
  // look/loop through my animals array and FIND the animal that has the matching name
  let foundAnimal = animals.find(a => a.name == animalName)
  // console.log('this is my found animal', foundAnimal);
  // increase nap
  // NOTE the property we want to target 'nap' exists on the object that we found in the array that we called foundAnimal
  // @ts-ignore
  foundAnimal.naps++
  console.log('found my animal now give some naps', foundAnimal);
  // update my page with the new information
  // NOTE re-drawing all the items uses a lot of 'javaScript energy' maybe this would be a good use case for .innerText instead of re-calling all of the things in the draw function when I only need to update one thing 
  drawAnimals()

  // TODO
  // NOTE to target only the naps on the object we want - try using innerText instead
  // document.getElementById('animalNap').innerText = 
}