
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
export const RegisterPost = (name, lastName, userName, email, password, age, phoneNumber, place, postalCode) => {
    
    const userData = {
        name,
        lastName,
        userName,
        email,
        password,
        age,
        phoneNumber,
        postalCode,
        place,
      };

      // Obtengo del localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      // Se Agrega el nuevo usuario al array
      const updatedUsers = [...existingUsers, userData];
      // Guarda el array actualizado en el localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
    

}
