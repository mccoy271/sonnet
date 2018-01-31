/* Display div */
var sonnetContent = document.getElementById("sonnet").innerHTML;

console.log(sonnetContent);

/*Display Orphan Position */
var orphanPosition = sonnetContent.search("orphan");

console.log(orphanPosition);

/*Display Sonnet Length */
var sonnetLength = sonnetContent.length;

console.log(sonnetLength);

/*Replace winter */
var sonnetReplace = sonnetContent.replace("winter", "yuletide");

console.log(sonnetReplace);

/*Replace the */
var sonnetReplaceThe = sonnetContent.replace(/the/g, "a large");

console.log(sonnetReplaceThe);

/*Replace div*/
document.getElementById("sonnet").innerHTML = sonnetReplaceThe;

