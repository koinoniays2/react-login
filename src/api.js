export async function serverTest() {
    try{
        const response = await fetch("http://localhost:4000");
        const json = await response.json();
        console.log(json);
    }catch(error) {
        console.log(error);
    }
}