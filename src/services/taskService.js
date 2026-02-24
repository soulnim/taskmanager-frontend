import axios from "axios";

const API_URL = "https://taskmanager-backend-production-92a7.up.railway.app/api/tasks";

export const getAllTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};