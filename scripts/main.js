import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDwellers.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionsHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionsHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()