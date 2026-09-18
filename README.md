# Frontend Mentor - FAQ Accordion Solution

This is my solution to the [FAQ Accordion challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) from Frontend Mentor.

Frontend Mentor challenges are a great way to practice building realistic, responsive user interfaces while improving frontend development skills.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide and show the answer to each question by clicking on the question
- Navigate through the questions using keyboard navigation
- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![FAQ Accordion Screenshot](./screenshot.jpg)

### Links

- Solution URL: [View the solution on Frontend Mentor](https://www.frontendmentor.io/)
- Live Site URL: [View the live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive design
- Mobile-first workflow
- JavaScript
- React
- Next.js

### What I learned

This project helped me practice building an interactive accordion component and managing the open/closed state of FAQ items.

I also focused on creating a responsive layout that works well across different screen sizes and implementing accessible interactive elements.

One of the main concepts I practiced was controlling which FAQ item is open using state:

```js
const [openItem, setOpenItem] = useState(null);

const toggleItem = (index) => {
  setOpenItem(openItem === index ? null : index);
};
```

This allows the user to open an FAQ item and close it again by clicking the same question.

I also practiced using semantic HTML and keyboard-accessible interactive elements instead of relying only on clickable `div` elements.

## Continued development

In future projects, I want to continue improving:

- Accessibility and keyboard navigation
- Responsive layouts
- React state management
- Component structure
- CSS animations and transitions
- Writing cleaner and more reusable components

I also want to become more comfortable building projects without relying heavily on tutorials and improve my ability to plan the component structure before starting development.

## Author

- Website - [My Portfolio](https://your-site.com)
- Frontend Mentor - [@Peter-diper](https://www.frontendmentor.io/)
- GitHub - [@Peter-diper](https://github.com/Peter-diper)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge and design resources.
