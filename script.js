// add javascript here

const requestEmail = () => {
    let email = prompt("Introduce tu email: ");
    while(!email || email.trim() === ""){
        email = prompt("No has introducido tu email, vuelve a introducirlo: ");
    }
    alert(`Thanks for your email!`);
}