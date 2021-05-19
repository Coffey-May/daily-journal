
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

export const updateEntry = (journalId, updatedEntry) => {
    return fetch(`http://localhost:3000/entries/${journalId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedEntry)
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