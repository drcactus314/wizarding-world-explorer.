export const getStudents = async()=>{
    const response = await fetch('https://hp-api.onrender.com/api/characters/students');
    return await response.json();
}

export const getStaff = async()=>{
    const response = await fetch('https://hp-api.onrender.com/api/characters/staff');
    return await response.json();
}
