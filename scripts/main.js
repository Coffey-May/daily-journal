import journalListComponent from "./journalListComponent.js"
import EntryListComponent from "./JournalEntryList.js"
import { journalhtml } from './journal.js'
import { getEntries } from './journalDataProvider.js'

getEntries()
    .then(journalhtml)
    .then(journalListComponent)
    .then(() => EntryListComponent())






