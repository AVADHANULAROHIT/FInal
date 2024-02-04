burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
async function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg   = document.getElementById('text-area').value;

    // Replace 'your_mongodb_url' with your actual MongoDB connection string
    const mongodbUrl = 'mongodb+srv://srikarmarupakaarchents:<MongoDB@8142428053>@travelagency.b2j7lpa.mongodb.net/?retryWrites=true&w=majority';

    try {
      // Fetch data from MongoDB directly (replace with your actual MongoDB query)
      const response = await fetch($,{mongodbUrl}/TravelAgency, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const existingData = await response.json();
      console.log('Existing data from MongoDB:', existingData);

      // Perform your MongoDB query to save new data (replace with your actual MongoDB query)
      const saveResponse = await fetch($,{mongodbUrl}/TravelAgency, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phone, msg }),
      });

      const savedData = await saveResponse.json();
      console.log('Data saved in MongoDB:', savedData);

      alert('Data submitted successfully!');
    } catch (error) {
      alert('Error submitting data. Please try again.');
      console.error(error);
    }
  }
