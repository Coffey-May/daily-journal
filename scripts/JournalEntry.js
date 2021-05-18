/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (journal) => {
    return `
        <section id="entryId--${journal.id}" class="journalEntry">
            <div class="date">${journal.date}</div>
            <div class="concept">${journal.concept}</div>
            <div class="entry">${journal.entry}</div>
            <div class="mood">${journal.mood}</div>
            <button id="deleteEntry--${journal.id}">Delete</button>
            <button id="editEntry--${journal.id}">Edit</button>
            <input type="hidden" name="entryId" id="entryId">
           
        </section>
    `
}

export default JournalEntryComponent