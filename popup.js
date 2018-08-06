const button = document.querySelector("button");

button.onclick = function() {
  console.log("clicked");
  navigator.clipboard.writeText('Text to be copied')
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(err => {
    // This can happen if the user denies clipboard permissions:
    console.error('Could not copy text: ', err);
  });
}