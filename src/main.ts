// API-related imports (if needed)
import axios from 'axios';

// Hide all sections
function hideAllSections(): void {
    const hiddenSections = document.querySelectorAll('.hidden-section');
    hiddenSections.forEach((section) => {
        (section as HTMLElement).style.display = 'none';
    });
}

// Show a specific section
function showSection(sectionId: string): void {
    hideAllSections();
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content')!;

    // Buttons to toggle sections
    document.getElementById('uploadBtn')?.addEventListener('click', () => showSection('uploadPack'));
    document.getElementById('updateBtn')?.addEventListener('click', () => showSection('updatePack'));
    document.getElementById('rateBtn')?.addEventListener('click', () => showSection('ratePack'));
    document.getElementById('costBtn')?.addEventListener('click', () => showSection('costPack'));
    document.getElementById('getBtn')?.addEventListener('click', () => showSection('getPack'));

    // Search form functionality
    document.getElementById('searchForm')?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = (document.getElementById('search-bar') as HTMLInputElement).value.trim();
        content.innerHTML = `<p>Searching...</p>`;
        try {
            const response = await axios.post('http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000/package/byRegEx', {
                RegEx: `.*?${query}.*`,
            });
            const packages = response.data;
            if (packages.length === 0) {
                content.innerHTML = `<p>No results found for "${query}".</p>`;
            } else {
                content.innerHTML = `
                    <h2>Search Results</h2>
                    <div>${packages.map((pkg: any) => `<p>${pkg.Name} - ${pkg.Version}</p>`).join('')}</div>
                `;
            }
        } catch (error) {
            content.innerHTML = `<p>Error: Could not fetch data.</p>`;
        }
    });
});
