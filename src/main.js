"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiURL = 'http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000';
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    // Handle Search Form Submission
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        event.preventDefault();
        // Get the search query from the input
        const query = document.getElementById('search-bar').value.trim();
        // Clear the content section and show a loading message
        content.innerHTML = `<p>Searching for packages...</p>`;
        if (!query) {
            content.innerHTML = `<p style="color: red;">Please enter a valid search query.</p>`;
            return;
        }
        try {
            // Make the POST request to the byRegEx endpoint
            const response = yield axios_1.default.post(`${apiURL}/package/byRegEx`, {
                RegEx: `.*?${query}.*`, // Convert the query into a regex format
            });
            const packages = response.data;
            // Check if packages are returned
            if (packages.length === 0) {
                content.innerHTML = `<p>No packages found for "${query}".</p>`;
            }
            else {
                // Render the list of packages
                content.innerHTML = `
                    <h2>Search Results for "${query}"</h2>
                    <div class="package-container">
                        ${packages.map((pkg) => `<div class="package-box">
                                    <p><strong>Name:</strong> ${pkg.Name}</p>
                                    <p><strong>Version:</strong> ${pkg.Version}</p>
                                    <p><strong>ID:</strong> ${pkg.ID}</p>
                                </div>`).join('')}
                    </div>
                `;
            }
        }
        catch (error) {
            console.error('Error fetching packages:', error);
            content.innerHTML = `<p style="color: red;">Error: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || 'Failed to fetch packages.'}</p>`;
        }
    }));
});
