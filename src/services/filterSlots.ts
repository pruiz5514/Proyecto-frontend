import { ISlots } from "app/types/ISlots";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function filterSlots(token: string, params:string) {

    const response = await fetch(`https://backend-parkingnow-fuyg.onrender.com/api/slots/available?${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }
    return data.data;
}