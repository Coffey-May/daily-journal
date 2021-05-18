const container = document.querySelector('.journalBody')
export const journalhtml = () => {

    container.innerHTML = `


<h1 class="stretch">D a i l y &nbsp&nbspJ o u r n a l</h1>
<form action="" class="formAnim">
    <fieldset>
        <label for="journalDate">Date of entry</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>

    <fieldset>
        <label for="journalConcepts">Concepts covered</label>
        <input id="concepts" type="text">
    </fieldset>

    <fieldset>
        <label for="journalEntry">Journal entry</label>
        <textarea id="textEntry"rows="2" cols="50">
        </textarea>
    </fieldset>

    <fieldset>
        <label for="mood">Mood for the day</label>
        <select id="select" >
            <option value=""></option>
            <option value="happy">Happy</option>
            <option value="meloncholy">Meloncholy</option>
            <option value="manic">Manic</option>
            <option value="super">Super</option>
            <option value="overjoyed">Over-joyed</option>
            <option value="gleeful">Gleeful</option>
            <option value="despair">Despair</option>
        </select>
    </fieldset>
    <button id="Record_Entry_Button"type="button">Record Journal Entry</button>
    <button id="Update_Entry_Button"type="button">Update Entry</button>
   
</form>
<br>
<section id="entryLog"></section>`
}
