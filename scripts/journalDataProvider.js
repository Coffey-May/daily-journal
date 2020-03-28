
/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
// const journal = [
//     {
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     },
//     {
//         date: "11/25/2019",
//         concept: "Modules and rendering objects as HTML",
//         entry: "We bit off more than we could chew and it barely makes sense.",
//         mood: "Despairful" 

//     },
//     {
//         date: "11/25/2019",
//         concept: "Modules and rendering objects as HTML",
//         entry: "We bit off more than we could chew and it barely makes sense.",
//         mood: "Despairful" 
//     }
// ]

// /*
//     You export a function that provides a version of the
//     raw data in the format that you want
// */
// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }

let entryCollection = []

export const useEntryCollection = () => {
    return entryCollection
}

// const setEntries = entries => {
//     entryCollection = entries.slice()
// }

export const getEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(
            parsedEntries => {
                entryCollection = parsedEntries.slice()
            }
        )
}

export const updateEntry = journalId => {
    return fetch(`http://localhost:3000/entries/${journalId}`, {
        method: "PUT"
    })
        .then(getEntries)
}



export const deleteEntry = journalId => {
    return fetch(`http://localhost:3000/entries/${journalId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}


export const saveEntries = savedEntries => {

    return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(savedEntries)
    })
        .then(getEntries)
}