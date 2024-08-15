# Enter-Stream

**Enter-Stream** is a demo streaming platform website built with React.js and Tailwind CSS. The site allows users to view a list of movies and series, as well as add, delete, and edit information about them. This project was implemented based on a [Figma design](https://www.figma.com/design/KcS8Gjwlfkm1PkCGLUBF1k/Untitled?node-id=8-270&t=ipdqPwcNJ1WfSmf7-0), showcasing practical application of design-to-code workflows.

<!-- Carousel Container -->
<div style="position: relative; max-width: 600px; margin: auto; overflow: hidden;">
  <!-- Slides -->
  <div class="carousel-slides" style="display: flex; transition: transform 0.5s ease;">
    <img src="images/image1.png" style="width: 100%; flex: 1;"/>
    <img src="images/image2.png" style="width: 100%; flex: 1;"/>
    <img src="images/image3.png" style="width: 100%; flex: 1;"/>
    <img src="images/image4.png" style="width: 100%; flex: 1;"/>
    <!-- Add more images as needed -->
  </div>
  <!-- Navigation -->
  <a class="prev" onclick="moveSlides(-1)" style="position: absolute; top: 50%; left: 0; background-color: rgba(0,0,0,0.5); color: white; padding: 10px;">&#10094;</a>
  <a class="next" onclick="moveSlides(1)" style="position: absolute; top: 50%; right: 0; background-color: rgba(0,0,0,0.5); color: white; padding: 10px;">&#10095;</a>
</div>

<!-- Carousel Script -->
<script>
  let slideIndex = 0;

  function showSlides(n) {
    const slides = document.querySelector(".carousel-slides");
    const slideCount = slides.children.length;
    if (n >= slideCount) slideIndex = 0;
    if (n < 0) slideIndex = slideCount - 1;
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  }

  function moveSlides(n) {
    showSlides(slideIndex += n);
  }

  // Initialize the carousel
  showSlides(slideIndex);
</script>

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
   git clone https://github.com/ThembaMtshelwane/enter-stream.git
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
