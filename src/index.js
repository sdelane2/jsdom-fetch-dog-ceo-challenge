console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(dogsObject => {
    dogRender(dogsObject)      
    console.log('Success:', dogsObject)
})
const dogDiv = document.querySelector("#dog-image-container")

function dogRender(dogsObject) {
    const imageArray = dogsObject.message
    imageArray.forEach(dog => {
    const dogImage = document.createElement("img")
    dogImage.src = dog
    dogDiv.appendChild(dogImage)
    }
)}

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(breedsObject => {
    breedsRender(breedsObject)      
    console.log('Success:', breedsObject)
})

const breedUl = document.querySelector("#dog-breeds")

function breedsRender(breedsObject) {
    const breedObject = breedsObject.message
    for(const breed in breedObject) {
        const dogLi = document.createElement("li")
        dogLi.textContent = breed
        breedUl.appendChild(dogLi)

        dogLi.addEventListener("click", function(){
            dogLi.style.color = "red"
            
        })
        
        const breedDropdown = document.querySelector("#breed-dropdown")
        breedDropdown.addEventListener("change", function(event){
            if (event.target = "a") {
                

        }})

    }
    
    
    
}

const breedDropdown = document.querySelector("#breed-dropdown")

breedDropdown.addEventListener("change", function(event){
   if (event.target = "a") {

   }
})
