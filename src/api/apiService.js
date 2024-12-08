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
exports.uploadPackage = exports.fetchPackages = void 0;
const axios_1 = __importDefault(require("axios"));
const apiURL = 'http://ec2-3-144-8-160.us-east-2.compute.amazonaws.com:3000';
const fetchPackages = (offset) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${apiURL}/packages`, { offset });
        return response.data;
    }
    catch (error) {
        throw new Error(`Error fetching packages: ${error}`);
    }
});
exports.fetchPackages = fetchPackages;
const uploadPackage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${apiURL}/package`, data);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error uploading package: ${error}`);
    }
});
exports.uploadPackage = uploadPackage;
// Add other API interactions as needed based on the OpenAPI spec
