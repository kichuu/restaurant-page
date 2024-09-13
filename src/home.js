export function Home() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    homeDiv.innerHTML = `
        <div style="text-align:center; padding:50px; background-image:url('https://example.com/restaurant-bg.jpg'); background-size:cover; color:white;">
            <h1 style="font-family:Georgia, serif; font-size:48px;">Welcome to Gourmet Paradise</h1>
            <p style="font-family:'Open Sans', sans-serif; font-size:20px; line-height:1.6;">
                Experience the finest cuisine with a blend of fresh ingredients and authentic flavors.
            </p>
            <button style="padding:12px 30px; background-color:#E63946; color:white; border:none; border-radius:25px; font-size:16px; cursor:pointer;">
                Reserve a Table
            </button>
            <button style="padding:12px 30px; background-color:#457B9D; color:white; border:none; border-radius:25px; font-size:16px; margin-left:15px; cursor:pointer;">
                Order Online
            </button>
        </div>

        <div style="display:flex; justify-content:space-around; margin-top:40px;">
            <div style="width:30%; padding:20px; background-color:#fff; box-shadow:0px 4px 8px rgba(0, 0, 0, 0.1); border-radius:10px;">
                <h2 style="color:#E63946; font-family:Georgia, serif;">Our Menu</h2>
                <p style="font-family:'Open Sans', sans-serif; color:#555;">
                    Indulge in our curated selection of dishes, from appetizers to decadent desserts.
                </p>
                <button style="padding:10px 20px; background-color:#E63946; color:white; border:none; border-radius:5px; cursor:pointer;">
                    View Menu
                </button>
            </div>
            <div style="width:30%; padding:20px; background-color:#fff; box-shadow:0px 4px 8px rgba(0, 0, 0, 0.1); border-radius:10px;">
                <h2 style="color:#457B9D; font-family:Georgia, serif;">Our Story</h2>
                <p style="font-family:'Open Sans', sans-serif; color:#555;">
                    From farm to table, our restaurant is dedicated to serving delicious, sustainably sourced meals.
                </p>
                <button style="padding:10px 20px; background-color:#457B9D; color:white; border:none; border-radius:5px; cursor:pointer;">
                    Learn More
                </button>
            </div>
            <div style="width:30%; padding:20px; background-color:#fff; box-shadow:0px 4px 8px rgba(0, 0, 0, 0.1); border-radius:10px;">
                <h2 style="color:#1D3557; font-family:Georgia, serif;">Contact Us</h2>
                <p style="font-family:'Open Sans', sans-serif; color:#555;">
                    Reach out to us for reservations, catering services, or any inquiries.
                </p>
                <button style="padding:10px 20px; background-color:#1D3557; color:white; border:none; border-radius:5px; cursor:pointer;">
                    Get in Touch
                </button>
            </div>
        </div>
    `;

    return homeDiv;
}
