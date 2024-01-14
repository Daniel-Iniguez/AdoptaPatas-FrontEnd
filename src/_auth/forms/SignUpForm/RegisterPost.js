import axios from "axios";

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
export const RegisterPost = async (name, lastName, userName, email, password, age, phoneNumber, place, userType) => {
  // ========== Peticion POST usando api axios ================
  const url = "http://localhost:8080/adoptapatas/v2/users";
    try {
      const user = {
        firstName: name,
        lastName: lastName,
        username: userName,
        age: age,
        email: email,
        phone: phoneNumber,
        password: password,
        city: place,
        state: "México",
        userType: {id:userType}
      }

      const response = await axios.post(url, user);
      console.log("Respuesta Existosa: ", response.data);
    } catch (error) {
      console.error('Error en la solicitud', error);
      throw error.response.data;
    }
  
  


  // ===== LOCAL STORAGE ========
  /* const userData = {
    name,
    lastName,
    userName,
    email,
    password,
    age,
    phoneNumber,
    userType,
    place,
  };

  // Obtengo del localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  // Se Agrega el nuevo usuario al array
  const updatedUsers = [...existingUsers, userData];
  // Guarda el array actualizado en el localStorage
  localStorage.setItem('users', JSON.stringify(updatedUsers)); */



}
