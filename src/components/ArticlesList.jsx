import { useState } from "react";

const mainArticles = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        content: "JavaScript è un linguaggio di programmazione...",
        author: "Mario Rossi"
    },
    {
        id: 2,
        title: "Guida base a React",
        content: "React è una libreria per creare interfacce...",
        author: "Luca Bianchi"
    },
    {
        id: 3,
        title: "Cos'è il CSS",
        content: "CSS serve per stilizzare le pagine web...",
        author: "Anna Verdi"
    }
];

function ArticlesList() {

    //creo var di stato per gestire la lista

    const [list, setList] = useState(mainArticles);


    return (
        <div>
            <h1>Ecco i tuoi articoli</h1>
            <ul>
                {/* vado a gestire il map sulla var di stato che ho creato*/}
                {list.map((elementList) =>(
                    // devo farmi ritornare una serie di li in base al contenuto della variabile
                    <li key={elementList.id}>
                        {elementList.title}
                    </li>
                )
            )}

            </ul>
        </div>
    )
}

export default ArticlesList