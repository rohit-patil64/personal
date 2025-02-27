window.onload = function() {
    
    let name = prompt("Please enter your name:");
    let profession = prompt("Please enter your profession:");
    let age = prompt("Please enter your age:");
    let country = prompt("Please enter your country:");
    let profilePicUrl = prompt("Please enter a URL for your profile picture:");

    
    const defaultMessage = "Enter the information";

    
    if (name === "" || profession === "" || age === "" || country === "" || profilePicUrl === "") {
        alert("Please fill out all fields.");
        return;
    }

    
    const bioContainer = document.createElement("div");
    bioContainer.classList.add("bio-container");

    bioContainer.style.border = "2px solid black";  
    bioContainer.style.padding = "20px";  
    bioContainer.style.width = "600px";  
    bioContainer.style.margin = "20px auto";  


    
    const title = document.createElement("h1");
    title.textContent = "Personal Bio";
    bioContainer.appendChild(title);

    
    const profilePic = document.createElement("img");
    profilePic.src = profilePicUrl !== "" ? profilePicUrl : "default_image_url_here.jpg"; 
    profilePic.style.width = "150px";
    profilePic.style.height = "150px";
    profilePic.style.borderRadius = "50%";
    bioContainer.appendChild(profilePic);

    
    const nameElement = document.createElement("p");
    nameElement.textContent = name !== "" ? `Name: ${name}` : `Name: ${defaultMessage}`;
    nameElement.style.fontWeight = "bold";
    bioContainer.appendChild(nameElement);

    
    const professionElement = document.createElement("p");
    professionElement.textContent = profession !== "" ? `Profession: ${profession}` : `Profession: ${defaultMessage}`;
    professionElement.style.fontWeight = "bold";
    bioContainer.appendChild(professionElement);

    
    const ageElement = document.createElement("p");
    ageElement.textContent = age !== "" ? `Age: ${age}` : `Age: ${defaultMessage}`;
    ageElement.style.fontWeight = "bold";
    bioContainer.appendChild(ageElement);

    
    const countryElement = document.createElement("p");
    countryElement.textContent = country !== "" ? `Country: ${country}` : `Country: ${defaultMessage}`;
    countryElement.style.fontWeight = "bold";
    bioContainer.appendChild(countryElement);

    
    document.body.appendChild(bioContainer);
};
