# AI Image Generator

The **AI Image Generator** is a React-based web application that utilizes the Stable Diffusion model via the Hugging Face API to create AI-generated images based on user prompts. This project demonstrates a user-friendly interface and seamless integration with AI-based image generation services.

## Features

- **Text-to-Image Generation**: Transform text descriptions into AI-generated images.
- **Loading Animation**: Displays a loading indicator while the image is being processed.
- **Responsive Design**: Works across various devices with a user-friendly interface.
- **Error Handling**: Graceful handling of errors with console logging for debugging.
- **Clean UI**: Styled components for an appealing and intuitive design.

## Technologies Used

- React.js: Frontend framework.
- Hugging Face API: Backend for the Stable Diffusion image generation model.
- CSS: Styling and animations.

## Installation

1. Clone the repository:

```
git clone https://github.com/Dibyendu-13/ImageGenerator.git
```
Navigate to the project directory:

```
cd ai-image-generator
```
Install dependencies:


```
npm install
```

Create an api.js file in the src directory and add your Hugging Face API token:

```
const Api = "YOUR_HUGGING_FACE_API_TOKEN";
export default Api;
```

Start the development server:

```
npm start
```

Usage
Open the app in your browser at http://localhost:3000.
Enter a description in the input field.
Click the Generate Image button.
Wait for the image to be generated. A loading animation will be displayed during the process.
View and download the generated image.
