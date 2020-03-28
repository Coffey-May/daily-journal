/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (journal) => {
    return `
        <section id="deleteEntry--${journal.id}" class="journalEntry">
            <div>${journal.date}</div>
            <div>${journal.concept}</div>
            <div>${journal.entry}</div>
            <div>${journal.mood}</div>
            <button id="deleteEntry--${journal.id}">Delete</button>
            <button id="editEntry--${journal.id}">Edit</button>
            <input type="hidden" name="entryId" id="entryId">
           
        </section>
    `
}

export default JournalEntryComponent