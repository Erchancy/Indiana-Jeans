// Set up the transient state data structure and provide initial values
const transientState = new Map()
    transientState.set("ownsBlueJeans", false)
    transientState.set("socioLocationId", 0)



// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership)
    console.log(transientState)
}

export const setSocioLocationId = (chosenOwnership) => {
    transientState.set("socioLocationId", chosenOwnership)
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    debugger
    const transientStateObject = Object.fromEntries(transientState.entries())
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientStateObject)
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)
    
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}

