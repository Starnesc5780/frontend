"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSection = exports.createButton = void 0;
const createButton = (id, text, onClick) => {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.onclick = onClick;
    button.setAttribute('aria-label', text);
    button.classList.add('accessible-button');
    return button;
};
exports.createButton = createButton;
const createSection = (id, title) => {
    const section = document.createElement('section');
    section.id = id;
    section.setAttribute('aria-labelledby', `${id}-label`);
    const heading = document.createElement('h2');
    heading.id = `${id}-label`;
    heading.textContent = title;
    section.appendChild(heading);
    return section;
};
exports.createSection = createSection;
// More components for forms, modals, etc.
