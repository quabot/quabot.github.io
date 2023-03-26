import axios from "axios";
import { API_URL } from "../utils/constants";

export const getDatabase = async () =>
    await axios.get(`${API_URL}/status/database`);

export const getSocket = async () =>
    await axios.get(`${API_URL}/status/ws`);

export const getApi = async () =>
    await axios.get(`${API_URL}/status/ping`);

export const getWebsite = async () =>
    await axios.get(`https://quabot.net`);

    // YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
    // THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023