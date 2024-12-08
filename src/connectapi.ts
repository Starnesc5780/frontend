import axios from "axios";

async function testByRegExEndpoint(baseUrl: string, authToken: string, regex: string) {
    try {
        const response = await axios.post(
            `${baseUrl}/package/byRegEx`,
            {
                RegEx: regex, // Regular expression for the search
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": authToken, // Authorization token
                },
            }
        );

        console.log("Response Data:", response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error Response:", error.response?.data);
        } else {
            console.error("Unexpected Error:", error);
        }
        throw error;
    }
}

// Example Usage
(async () => {
    const baseUrl = "http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000"; // Replace with your API base URL
    const authToken = "your-valid-auth-token"; // Ensure this is correct
    const regex = "."; // General regex for testing

    try {
        const result = await testByRegExEndpoint(baseUrl, authToken, regex);
        // console.log("Test Successful! Result:", result);
    } catch (err) {
        console.error("Test Failed:", err);
    }
})();

