// src/api/tasks.js
import axios from "axios";

const API_URL = "taskmanager-backend-production-92a7.up.railway.app";

export const fetchTasks = () => axios.get(API_URL);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);