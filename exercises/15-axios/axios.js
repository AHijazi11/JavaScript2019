/**
 * As a user, I should be greeted with a list of all rick and morty characters
 * As a user, I should be able to select a character from the dropdown and have that user displayed as an image
 * Helpful link for populating a dropdown
 *
 * This is the URL for the API you will be using. The method should be GET.
 * https://rickandmortyapi.com/api/character
 *
 * Use the AXIOS library to make AJAX requests.
 */

/**
 * Call on this function to populate the dropdown on the page with a character.
 * @param {Object} data the entire AJAX response
 */
const populateDropDown = data => {
  $("#dropdown").empty();
  data.forEach(p => {
    // This is what you need to replace
    $("#dropdown").append(
      $("<option></option>")
        .val(p.name)
        .html(p.name)
    );
  });
};

axios({
  url: "https://rickandmortyapi.com/api/character",
  method: "GET"
})
  .then(response => {
    populateDropDown(response.data.results);
  }) // success

  .catch(data => {
    const text = "We're sorry, but an unexpected error occurred";
    const elem = document.getElementById("error");
    elem.textContent = text;
    elem.classList.remove("hidden");
  }); // failure
