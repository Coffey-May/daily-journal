import { saveEntries, useEntryCollection, getEntries,deleteEntry } from './journalDataProvider.js';
import JournalEntryComponent from './JournalEntry.js';


const eventHub = document.querySelector('.container');

const EntryListComponent = () => {
	eventHub.addEventListener('click', (e) => {
		if (e.target.id === 'Record_Entry_Button') {
			const date = document.getElementById('journalDate').value;
			const concepts = document.getElementById('concepts').value;
			const entryText = document.getElementById('textEntry').value;
			const select = document.getElementById('select').value;

			const newEntry = {
				date: date,
				concept: concepts,
				entry: entryText,
				mood: select
			};

			saveEntries(newEntry).then(() => {
				const entries = useEntryCollection();
				render(entries);
			});
        } 
});

	const entryLog = document.querySelector('#entryLog');

	const render = (entries) => {
		entryLog.innerHTML = '';
		entryLog.innerHTML = `
    <section class="entryList">
        ${entries
			.map((currentEntry) => {
				return JournalEntryComponent(currentEntry);
			})
            .join('')}
           
            </section>            
    
    `;
    };
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteEntry--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
    
            /*
                Invoke the function that performs the delete operation.
    
                Once the operation is complete you should THEN invoke
                useNotes() and render the note list again.
            */
           deleteEntry(id).then(
               () => {
                   const updatedEntrys = useEntryCollection()
                   render(updatedEntrys)
               }
           )
        }
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editEntry--")) {
            const [notUsed, journalId] = clickEvent.target.id.split("--")
           
            
            /*
                Let all other components know that the user chose
                to edit an entry, and attach data to the message
                so that any listeners know which entry should be
                edited.
            */
            const message = new CustomEvent('editEntryButtonClicked', {
                detail: {
                    noteId: journalId
                }
            })
            console.log(message)
            eventHub.dispatchEvent(message)
        }
    })

    
};
export default EntryListComponent;



