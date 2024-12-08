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
function testByRegExEndpoint(baseUrl, authToken, regex) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield axios_1.default.post(`${baseUrl}/package/byRegEx`, {
                RegEx: regex, // Regular expression for the search
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": authToken, // Authorization token
                },
            });
            console.log("Response Data:", response.data);
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error("Error Response:", (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            }
            else {
                console.error("Unexpected Error:", error);
            }
            throw error;
        }
    });
}
// Example Usage
(() => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = "http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000"; // Replace with your API base URL
    const authToken = "your-valid-auth-token"; // Ensure this is correct
    const regex = "."; // General regex for testing
    try {
        const result = yield testByRegExEndpoint(baseUrl, authToken, regex);
        // console.log("Test Successful! Result:", result);
    }
    catch (err) {
        console.error("Test Failed:", err);
    }
}))();
