
fetchData();

async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data.name);
        console.log(data.id);
        
        const pokemonSprite = data.sprites.front_default;
        const pokemonType = data.types[0].type.name;
        const pokemonHeight = data.height;
        const pokemonWeight = data.weight;

        const imgElement = document.getElementById("pokemonSprite");
        const typeElement = document.getElementById("pokemonType");
        const heightElement = document.getElementById("pokemonHeight");
        const weightElement = document.getElementById("pokemonWeight");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        typeElement.innerText = pokemonType;
        typeElement.style.display = "block";
        heightElement.innerText = pokemonHeight;
        heightElement.style.display = "block";
        weightElement.innerText = pokemonWeight;
        weightElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
}

