// Seleziono elemento contenitore
const contenitore = document.getElementById('container');


// Cicliamo l'operazione di creazione dell'elemento e di output
for (let i = 1; i <= 100; i++) {

    // Creiamo nuovo elemento
    const element = document.createElement('span');

    // Inseriamo il valore all'interno dell'elemento creato
    element.append(i);

    // Aggiungiamo col contenitore l'elemento stampato
    contenitore.append(element);

    // Istruzioni condizionali
    if (i % 15 === 0) {

        // Modifico l'innerHtml in caso di numero divisibile sia per 3 che per 5
        element.innerHTML = `FizzBuzz`;
        // Aggiungo classe per la modifica del background
        element.classList.add("fizzbuzz");

        

    } else if (i % 5 === 0) {

        // Modifico l'innerHtml in caso di numero divisibile per 5
        element.innerHTML = `buzz`;
        // Aggiungo classe per la modifica del background
        element.classList.add("buzz");

    }   else if (i % 3 === 0) {

        //Modifico l'innerHtml in caso di numero divisibile per 3
        element.innerHTML = `fizz`;
        // Aggiungo classe per la modifica del background
        element.classList.add("fizz");
        

    }
}

    


