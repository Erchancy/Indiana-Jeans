export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch ('http://localhost:8088/submissions')
    const submissions = await response.json()


    // Iterate the submissions and create some <section> representations
    let submissionsHTML = ""
    submissions.map(
        (submission) => {
            
                submissionsHTML += `<section class="submission">
                <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
                <div>Area Type foreign key? ${submission.socioLocationId}</div>
                </section>`
            }
    )


    // Return the HTML string
    return submissionsHTML
}