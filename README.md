# TaskForge

### Forge focus. Finish stronger.

TaskForge is a responsive productivity and task management dashboard built as a frontend project. It provides a simple and organized interface for managing tasks, tracking projects, checking progress, and staying focused on upcoming work.

The project was built to practice and demonstrate core frontend development skills using HTML, CSS, and JavaScript without using any frontend frameworks.

---

## Features

- Responsive productivity dashboard
- Sidebar navigation
- Dashboard overview with statistics
- Project progress tracking
- Task management
- Add new tasks through a modal
- Mark tasks as completed
- Task search functionality
- Upcoming deadlines section
- Weekly focus/progress section
- Dark mode and light mode
- Dark mode preference saved using LocalStorage
- Mobile-friendly navigation
- Responsive layout for desktop, tablet, and mobile
- Keyboard-friendly interactions
- Accessible focus states
- Reduced-motion support

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts - Poppins

---

## Frontend Concepts Used

### HTML5
- Semantic HTML elements
- Structured page layout
- Forms and interactive elements
- Accessibility-friendly markup

### CSS3
- CSS Grid
- Flexbox
- CSS Variables
- Media Queries
- Responsive Design
- Mobile-first layout
- Fluid typography using `clamp()`
- Transitions and animations
- Dark and light themes

### JavaScript
- DOM manipulation
- Event listeners
- Dynamic task creation
- Task completion handling
- Search functionality
- Modal interactions
- Sidebar toggle
- Theme switching
- LocalStorage
- Keyboard interactions

---

## Responsive Design

TaskForge is designed to work across different screen sizes.

The layout adapts for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive breakpoints are used to adjust the dashboard, sidebar, navigation, task sections, and other components according to the available screen space.

---

## Theme

TaskForge uses a blue-based visual identity with two available themes.

### Light Mode
A clean and bright interface designed for comfortable daytime use.

### Dark Mode
A dark navy interface designed for a more focused and comfortable experience, especially in low-light environments.

The selected theme is stored using LocalStorage so the preference remains available when the page is opened again.

---

## Project Structure

```text
TaskForge/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
