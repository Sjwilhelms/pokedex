fetchData();

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");

        if(!response.ok){
            throw new error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data.name);
        console.log(data.id);
        console.log(data.sprite);
    }

    catch(error){
        console.error(error);
    }
}

