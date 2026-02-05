//function launchBrowser(browser)
let browser="chrome"
if(browser="chrome")
{
    console.log("opening chrome browser")
}
else if(browser="firefox")
{
    console.log("opening firefox browser")
}
else
{
    console.log("not valid")
}
//function runTests(testType)

let testType="smoke"
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests")
            break
        case "regression":
            console.log("Running Regression Tests")
            break
        case "sanity":
            console.log("Running Sanity Tests")
            break
        default:
            console.log("Unknown Test Type")
    }

