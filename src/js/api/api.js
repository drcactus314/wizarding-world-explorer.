export const getStudents = async(index)=>{
    const response = await fetch('https://hp-api.onrender.com/api/characters/students');
    return await response.json();
}
export const init =async()=>{
    const data = await getStudents();

}

// export const getData = async()=>{
//     const data = await getStudents();
//     const htmlCards = data.map()
//     console.log(data);
    
// }
// console.log(getStudents);