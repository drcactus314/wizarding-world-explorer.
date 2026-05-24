export const getStudents = async()=>{
    const response = await fetch('https://hp-api.onrender.com/api/characters/students');
    return await response.json();
}
