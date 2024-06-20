# Instagram HD Profile Picture Downloader

## Overview

This Node.js script is designed to fetch the profile picture of an Instagram user and save it to a local directory on your machine. It uses Axios for making HTTP requests and handles user input through readline.

## Prerequisites

Before running the script, ensure you have Node.js installed on your system.

## Setup

1. Clone or download the script to your local machine.
2. Navigate to the directory containing the script in your terminal.
3. Install the required npm packages by running:
   ```
   npm install axios
   ```

## Usage

1. Open your terminal and navigate to the directory where the script is located.
2. Run the script using Node.js:
   ```
   node index.js
   ```
3. When prompted, enter the Instagram username for which you want to download the profile picture.

## Functionality

- The script prompts you to enter an Instagram username.
- It constructs an API request to fetch profile information using the Instagram API endpoint.
- Upon successful retrieval, it extracts the URL for the HD profile picture and downloads it.
- The downloaded image is saved to a local directory named `pfp` (profile pictures).

## Dependencies

- **axios**: Used for making HTTP requests.
- **readline**: Provides an interface for reading lines of input.
- **fs**: Node.js module for interacting with the file system.
- **path**: Node.js module for handling and transforming file paths.

## Note

- The script uses a specific User-Agent header to mimic a mobile device's request to the Instagram API. This is necessary for accessing certain API endpoints.

## Contributing

Contributions are welcome! If you find any issues or want to add features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact:
- GitHub: [edizbaha](https://github.com/edizbaha)
- Email: [ediz@omg.lol](mailto:ediz@omg.lol)
