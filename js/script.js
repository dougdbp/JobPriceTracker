function calculateTotalPrice() {
  // Get the input values
  var timePrice = parseFloat(document.getElementById("inputTimePrice").value);
  var timeMinute = parseFloat(document.getElementById("inputTimeMinute").value);

  // Calculate the total price
  var totalPrice = timePrice * timeMinute;

  // Get the current date
  var today = new Date();
  var currentDate =
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  // Get the input field values
  var projectName = document.getElementById("inputProjectName").value;
  var clientName = document.getElementById("inputClientName").value;
  var jobObs = document.getElementById("jobObs").value;

  // Create the printable content
  var printableContent =
    "Data: " +
    currentDate +
    "\nProjeto: " +
    projectName +
    "\nCliente: " +
    clientName +
    "\nTempo gasto (em minutos): " +
    timeMinute +
    "\nCusto pessoal: " +
    totalPrice +
    "\nObservações: " +
    jobObs;

  // Open a new window for printing
  var printWindow = window.open("", "_blank");

  // Write the printable content to the new window
  printWindow.document.open();
  printWindow.document.write("<pre>" + printableContent + "</pre>");
  printWindow.document.close();

  // Print the window
  //printWindow.print();
}