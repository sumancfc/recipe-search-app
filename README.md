# Recipe Search Application

This project is a Recipe Search Application built with React and TypeScript. It allows users to search for recipes using the Edamam API and displays the results with details such as the recipe title, calories, ingredients, and an image.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for recipes by keyword
- Display recipe details including title, calories, ingredients, and image
- Responsive design

## Getting Started

To get a local copy up and running, follow these simple steps.

### Environment Variables

Create a `.env` file in the root directory of your project with the following content for Edamam API:

```sh
REACT_APP_API_ID=yourAppIdHere
REACT_APP_API_KEY=yourAppKeyHere
```

### Installation

1. **Clone the repo**

   ```sh
   git clone https://github.com/sumancfc/recipe-search-app.git
   ```

2. **Install NPM packages**

   ```sh
   npm install
   ```

### Usage

1. **Run the app**

   ```sh
   npm start
   ```

2. **Open http://localhost:3000 to view it in your browser.**

## Project Structure

```sh
recipe-search-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Form.tsx
│   │   ├── Recipe.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.css
├── .env
├── package.json
├── README.md
├── tsconfig.json

```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push -u origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
