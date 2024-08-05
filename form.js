document.addEventListener('DOMContentLoaded', function() {
    let emailCount = 1;
    let phoneCount = 1;

    // Add extra email field
    document.getElementById('addEmail').addEventListener('click', function() {
        emailCount++;
        const emailDiv = document.createElement('div');
        emailDiv.className = 'additional-input';
        emailDiv.innerHTML = `
            <label for="email${emailCount}">Additional Email ${emailCount}:</label>
            <input type="email" id="email${emailCount}" name="email${emailCount}"><br><br>
        `;
        document.getElementById('additionalEmails').appendChild(emailDiv);
    });

    // Add extra phone number field
    document.getElementById('addPhone').addEventListener('click', function() {
        phoneCount++;
        const phoneDiv = document.createElement('div');
        phoneDiv.className = 'additional-input';
        phoneDiv.innerHTML = `
            <label for="phone${phoneCount}">Additional Phone ${phoneCount}:</label>
            <input type="tel" id="phone${phoneCount}" name="phone${phoneCount}" pattern="[0-9]{10}"><br><br>
        `;
        document.getElementById('additionalPhones').appendChild(phoneDiv);
    });

    // Handle form submission
    document.getElementById('biodataForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        // Collect additional emails
        const emails = [email];
        for (let i = 2; i <= emailCount; i++) {
            const additionalEmail = document.getElementById(`email${i}`);
            if (additionalEmail && additionalEmail.value) {
                emails.push(additionalEmail.value);
            }
        }

        // Collect additional phone numbers
        const phones = [phone];
        for (let i = 2; i <= phoneCount; i++) {
            const additionalPhone = document.getElementById(`phone${i}`);
            if (additionalPhone && additionalPhone.value) {
                phones.push(additionalPhone.value);
            }
        }

        // Store data in localStorage
        const formData = {
            name: name,
            emails: emails,
            dob: dob,
            gender: gender,
            address: address,
            phones: phones
        };
        localStorage.setItem('bioData', JSON.stringify(formData));

        // Redirect to the display page
        window.location.href = 'display.html';
    });
});