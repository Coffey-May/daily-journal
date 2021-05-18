import { saveEntries, useEntryCollection, updateEntry, getEntries, deleteEntry } from './journalDataProvider.js';
import JournalEntryComponent from './JournalEntry.js';


const eventHub = document.querySelector('.container');

//POST METHOD TO ADD AN ENTRY

const EntryListComponent = () => {
    eventHub.addEventListener('click', (e) => {
        if (e.target.id === 'Record_Entry_Button') {

            const date = document.getElementById('journalDate').value;
            const concepts = document.getElementById('concepts').value;
            const entryText = document.getElementById('textEntry').value;
            const select = document.getElementById('select').value;

            if (date === "" || concepts === "" || entryText === "" || select === "") {
                alert("please fill out all fields...")
            } else {

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
                document.getElementById('journalDate').value = ""
                document.getElementById('concepts').value = ""
                document.getElementById('textEntry').value = ""
                document.getElementById('select').value = ""
            }
        }
    });

    //RENDERS ALL ENTRIES INTO LIST

    const entryLog = document.querySelector('#entryLog');

    const render = (entries) => {
        entryLog.innerHTML = '';
        entryLog.innerHTML = `
    <section class="entryList">
        ${entries.map((currentEntry) => {
            return JournalEntryComponent(currentEntry);
        }).join('')}
    </section>
    `;
    };

    //DELETE FUNCTION REMOVES CHOSEN ENTRY

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteEntry--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
            deleteEntry(id).then(
                () => {
                    const updatedEntrys = useEntryCollection()
                    render(updatedEntrys)
                }
            )
        }
    })

    //UPDATE/EDIT/PATCH METHOD FOR AMENDING ENTRY

    eventHub.addEventListener("click", e => {
        if (e.target.id.startsWith("editEntry--")) {

            const [prefix, id] = e.target.id.split("--")
            let parent = e.target.parentElement
            let entryToBeEditted = id

            let date = parent.querySelector(".date").innerText
            let concept = parent.querySelector(".concept").innerText
            let entry = parent.querySelector(".entry").innerText
            let mood = parent.querySelector(".mood").innerText

            document.getElementById('journalDate').value = date
            document.getElementById('concepts').value = concept
            document.getElementById('textEntry').value = entry
            document.getElementById('select').value = mood
            document.getElementById('Record_Entry_Button').style.display = "none"
            document.getElementById('Update_Entry_Button').style.display = "block"

            eventHub.addEventListener("click", e => {
                if (e.target.id === 'Update_Entry_Button') {
                    console.log('Update Clicked')

                    let date = document.getElementById('journalDate').value;
                    let concept = document.getElementById('concepts').value;
                    let entry = document.getElementById('textEntry').value;
                    let mood = document.getElementById('select').value;

                    let updatedEntry = {
                        date: date,
                        concept: concept,
                        entry: entry,
                        mood: mood
                    }
                    console.log(updatedEntry)
                    updateEntry(entryToBeEditted, updatedEntry)
                        .then(() => {
                            const entries = useEntryCollection();
                            render(entries);
                        });
                    document.getElementById('journalDate').value = ""
                    document.getElementById('concepts').value = ""
                    document.getElementById('textEntry').value = ""
                    document.getElementById('select').value = ""
                }
            })

        }
    })




};
export default EntryListComponent;




/*
    Let all other components know that the user chose
    to edit an entry, and attach data to the message
    so that any listeners know which entry should be
    edited.
*/
            // const message = new CustomEvent('editEntryButtonClicked', {
            //     detail: {
            //         noteId: journalId
            //     }
            // })
            // console.log(message)
            // eventHub.dispatchEvent(message)