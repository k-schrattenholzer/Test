// import functions and grab DOM elements
const nameButton = document.getElementById('changeName');
const nameContainer = document.getElementById('nameContainer');
const buttonContainer = document.getElementById('buttonContainer');
const nameEl = document.getElementById('nameEl');
const petButton = document.getElementById('petsButton');

// let state
const names = ["Katoe", "Jens", "Rachel", "Cats", "Pablo"]
const pets = ['Kenai', 'Yanis', 'Gigi', 'Vanjie', "Pablo", 'Maybie']


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
nameButton.addEventListener('click', () => {
  walkingAway();
})


petButton.addEventListener('click', () => {
  for (let pet of pets) {
    const petImg = document.createElement('img')
    const petName = document.createElement('p')
    petName.textContent = pet
    const imgNumber1 = Math.floor(Math.random() * 5) + 1
    const imgNumber2 = Math.floor(Math.random() * 5) + 1
    petImg.src = `https://placekeanu.com/2${imgNumber1}0/3${imgNumber2}0`
    buttonContainer.append(petImg, petName)
    
  }
})



function walkingAway() {
  // console.log('words that are important')
  // nameEl.textContent = names[3]
  for (let name of names) {
    const nameGoose = document.createElement('p')
    nameGoose.textContent = name
    nameGoose.classList.add('potato')
    nameContainer.append(nameGoose)
  }
}
