document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate signup functionality (in a real app, this would be handled by a backend)
    console.log(`User signed up with username: ${username}, password: ${password}`);
});

document.getElementById('documentUpload').addEventListener('change', function (event) {
    const uploadedFile = event.target.files[0];

    // Simulate document upload functionality (in a real app, this would be handled by a backend)
    console.log(`Document uploaded: ${uploadedFile.name}`);

    // Display the uploaded document
    const uploadedDocumentsContainer = document.getElementById('uploadedDocuments');
    const documentItem = document.createElement('div');
    documentItem.textContent = uploadedFile.name;
    uploadedDocumentsContainer.appendChild(documentItem);
});

document.getElementById('uploadButton').addEventListener('click', function () {
    document.getElementById('documentUpload').click();
});
