🚀 My React Project

This project was bootstrapped with Create React App
.
It comes with additional setup for Bootstrap and Swiper to make UI development faster and smoother.

📦 Installation

Clone this repository and install dependencies:

git clone https://github.com/username/repo-name.git
cd repo-name
npm install

🛠️ Available Scripts

In the project directory, you can run:

npm start

Runs the app in development mode.
Open http://localhost:3000
in your browser.

The page reloads when you make changes, and you’ll see lint errors in the console if any.

npm test

Launches the test runner in interactive watch mode.
See more: running tests
.

npm run build

Builds the app for production to the build folder.
It optimizes the build for best performance and generates minified files with hashes.

npm run eject

⚠️ Warning: One-way operation. Once you eject, you can’t go back.
It copies all configs (Webpack, Babel, ESLint, etc.) into your project for full control.

🎨 UI Frameworks & Plugins

1. Bootstrap Setup

Bootstrap is used for styling and responsive layout.

Install Bootstrap & Bootstrap Icons:

npm install bootstrap bootstrap-icons

Import in src/app.js:

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

Now you can use Bootstrap classes and icons directly in your components.

Example:

<button className="btn btn-primary">
  <i className="bi bi-heart-fill"></i> Like
</button>

2. Swiper Setup

Swiper is used for sliders/carousels.

Install Swiper:

npm install swiper

Import in your component:

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

function Slider() {
return (
<Swiper
modules={[Navigation, Pagination]}
navigation
pagination={{ clickable: true }}
loop={true} >
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
);
}

📚 Learn More

React Documentation

Create React App Docs

Bootstrap Docs

Swiper Docs

🚀 Deployment

See official guide: Deployment
