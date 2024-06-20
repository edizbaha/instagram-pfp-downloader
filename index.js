const axios = require('axios');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Creating readline interface to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Asking for Instagram username using readline
rl.question('Please enter the Instagram username: ', (username) => {
  // Instagram API endpoint and user agent
  const apiUrl = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
  const userAgent = "Instagram 337.0.0.0.77 Android (28/9; 420dpi; 1080x1920; samsung; SM-G611F; on7xreflte; samsungexynos7870; en_US; 493419337)";

  // Sending request with Axios
  axios.get(apiUrl, {
    headers: {
      'User-Agent': userAgent
    }
  })
  .then(response => {
    // If request successful, process the response
    const profilePicUrlHD = response.data.data.user.profile_pic_url_hd;
    const fileName = `${username}.jpg`;
    const folderPath = path.join(__dirname, 'pfp'); // Creating path to pfp folder

    // Create pfp folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    // Download and save the profile picture
    axios({
      url: profilePicUrlHD,
      method: 'GET',
      responseType: 'stream'
    })
    .then(response => {
      const filePath = path.join(folderPath, fileName);
      response.data.pipe(fs.createWriteStream(filePath));
      console.log(`Profile picture successfully saved: ${fileName}`);
    })
    .catch(error => {
      console.error('Error while downloading the image:', error.message);
    });
  })
  .catch(error => {
    // If user not found or other error, handle it
    console.error('User not found or error occurred.');
  })
  .finally(() => {
    // Close readline interface after processing
    rl.close();
  });
});
