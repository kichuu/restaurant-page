export  function About(){
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add('about')
    aboutDiv.innerHTML=`
        <h1>Contact Us</h1>
        <p>Address: 123 Test Street, test City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@restaurant.com</p>
    `
    return aboutDiv
}