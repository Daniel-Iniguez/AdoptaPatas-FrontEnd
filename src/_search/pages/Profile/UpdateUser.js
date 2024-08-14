import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../_auth/context/UserContext";

/** 
 *  Función para regitrar a un usuario en el localstorage
 * @param {name} name 
 * @param {lastName} lastName 
 * @param {age} age 
 * @param {email} email 
 * @param {userName} username 
 * @param {password} password 
 * @param {phoneNumber} numberPhone
 * @param {place} city
 * @param {postalCode} postalCode 
 */
export const UpdateUser = async (id,name, lastName, userName, email, age, phoneNumber, userBio) => {

  // ========== Peticion POST usando api axios ================
  const url = `http://localhost:8080/adoptapatas/v2/users/${id}`;
    try {
      const user = {
        firstName: name,
        lastName: lastName,
        username: userName,
        age: age,
        email: email,
        phone: phoneNumber,
        bio: userBio,
      }
      const response = await axios.put(url, user);
      console.log("%cRespuesta Existosa",'color: green; font-weight: bold;', response.data);
      
    } catch (error) {
      console.error('Error en la solicitud de actualización', error);
      throw error.response.data;
    }
}