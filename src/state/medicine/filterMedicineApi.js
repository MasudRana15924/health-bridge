import axios from "axios";
import { api } from "../../config/index";
export const getFilterMedicine = async () => {
    const response = await axios.get(`${api}/get/medicine`);
    return response.data;
}