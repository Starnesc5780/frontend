import axios from 'axios';

const apiURL = 'http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000';
// const apiURL = 'http://localhost:3000';

export const fetchPackages = async (offset: number) => {
    try {
        const response = await axios.post(`${apiURL}/packages`, { offset });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching packages: ${error}`);
    }
};

export const uploadPackage = async (data: FormData) => {
    try {
        const response = await axios.post(`${apiURL}/package`, data);
        return response.data;
    } catch (error) {
        throw new Error(`Error uploading package: ${error}`);
    }
};

// Add other API interactions as needed based on the OpenAPI spec
