import React, {useState} from "react"



export default function Pokdex(){

    const [cards, setCards] = useState([])

    function populateCards(){

    return cards.map((card) = (

        <Pokecard
            key = {card.id}
            typename = {card.typename}
            type = {card.type}
            base_experience = {card.base_experience} 
            />

    ));

}

    return(

        <div className="pokecard-container">
            <h1>Pokedex</h1>
            <Pokecard
            { ...cards && populateCards()} />
        </div>
         
    )

}