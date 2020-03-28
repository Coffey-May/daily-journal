import journalListComponent from "./journalListComponent.js"
import EntryListComponent from "./JournalEntryList.js"
import { journalhtml } from './journal.js'
import { getEntries, saveEntries, deleteEntry } from './journalDataProvider.js'






getEntries()
    
    // .then(saveEntries)  
    .then(journalhtml)
    .then(journalListComponent)
    .then(() => EntryListComponent() )
    
    




