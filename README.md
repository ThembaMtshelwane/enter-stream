# Enter-Stream

**Enter-Stream** is a demo streaming platform website built with React.js, Tailwind CSS, and CSS Grid. The site allows users to view a list of movies and series, as well as add, delete, and edit information about them. This project was implemented based on a Figma design, showcasing practical application of design-to-code workflows.

## Features

- **CRUD Functionality**:
  - **Create**: Add new movies or series.
  - **Read**: View a list of all movies and series.
  - **Update**: Edit existing movie/series information, including title, image, release year, genre, and country of origin.
  - **Delete**: Remove movies or series from the list.
- **Multi-page Layout**: The website features multiple pages to enhance the user experience.

- **Tailwind CSS**: Leveraged Tailwind for rapid UI development with utility-first CSS.

- **CSS Grid**: Implemented CSS Grid for a flexible and responsive layout.

- **Figma Design**: The website was implemented based on a Figma design, reflecting accurate conversion from design to code.

## Tech Stack

- **Frontend**:

  - React.js
  - Tailwind CSS

- **Backend**:
  - JSON Server (local development)

## Learning Outcomes

- **Tailwind CSS**: Gained proficiency in using Tailwind CSS to quickly style components and manage responsive designs.
- **CSS Grid**: Developed a deep understanding of CSS Grid for creating complex, responsive layouts.
- **React.js**: Improved skills in component-based development and state management in React.
- **JSON Server**: Learned how to set up and use JSON Server as a mock backend to handle CRUD operations, as well as how to interact with a JSON file as a database.
- **Design-to-Code Workflow**: Gained experience in translating Figma designs into functional web components.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/enter-stream.git
   cd enter-stream

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Start the JSON server:**

   ```bash
   npm run server

   ```

4. **Run the React application:**

   ```bash
   npm run dev

   ```

5. Open your browser and navigate to http://localhost:3000 to view the website.

## Limitations

- Deployment: The website cannot be deployed as it relies on a JSON file/server for its backend. The JSON server must be running locally to perform CRUD operations.

## Future Enhancements

- Replace the JSON server with a proper backend solution (e.g., Node.js/Express with a database) to enable deployment.
- Implement authentication and user management.
- Add search and filtering functionalities to improve user experience.

## License

This project is open-source and available under the MIT License.
