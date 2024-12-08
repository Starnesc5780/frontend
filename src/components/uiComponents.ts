export const createButton = (id: string, text: string, onClick: () => void): HTMLElement => {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.onclick = onClick;
    button.setAttribute('aria-label', text);
    button.classList.add('accessible-button');
    return button;
};

export const createSection = (id: string, title: string): HTMLElement => {
    const section = document.createElement('section');
    section.id = id;
    section.setAttribute('aria-labelledby', `${id}-label`);
    const heading = document.createElement('h2');
    heading.id = `${id}-label`;
    heading.textContent = title;
    section.appendChild(heading);
    return section;
};

// More components for forms, modals, etc.
