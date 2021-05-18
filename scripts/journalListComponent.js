import JournalEntryComponent from "./JournalEntry.js"
import { useEntryCollection } from "./journalDataProvider.js"



const eventHub = document.querySelector('.container')


let journalhtml =" "

const journalListComponent = () => {
    const entry = document.querySelector("#entryLog")
        const entries = useEntryCollection()
        for (const singleEntry of entries) {
        const html =  JournalEntryComponent(singleEntry)
        journalhtml += html
    }
    entry.innerHTML = `
    <div class="entrybox">
    ${journalhtml}
   
    </div>      
    `
// eventHub.addEventListener('click', e => {
//     if(e.target.id === 'del-btn'){
//        entry.innerHTML = ""
//     }
// })
}
export default journalListComponent