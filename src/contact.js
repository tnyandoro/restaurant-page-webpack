// const createContact = () => {
//   const contact = document.createElement("div");
//   contact.classList.add("contact");

//   const phoneNumber = document.createElement("p");
//   phoneNumber.textContent = " Phone: +27 246 123 0987";

//   const address = document.createElement("p");
//   address.textContent = "Address: 39 Troupant Ave 2191, Magelissig, johannesburg, Gauteng, South Africa";

//   contact.appendChild(phoneNumber);
//   contact.appendChild(address);

//   return contact;
  
// };


// const loadContact = () => {
//   const head = document.getElementById("main");
//   head.textContent = "";
//   head.appendChild(createContact());
// };

// export default loadContact;

const createContact = (() => {
  //container
  // const contentContainer = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.innerHTML = `
    <div class="hero">
    <h1>Contact us</h1>
  </div>
  <div class="contact-container">
    <div class="info">
      <div class="address">
        <p>
          <i class="fi-xnsuxl-map-marker-solid"></i>39 Troupant Ave<br />San
          Magelissig, Fourways , 2191, Johannesburg South Africa
        </p>
      </div>
      <div class="hours">
        <p>
          <i class="fi-cnsuhl-clock-solid"></i
          ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
          >8am-11pm
        </p>
      </div>
      <div class="phone">
        <p><i class="fi-xnsrxl-phone-solid"></i>(27)-631 245 9823</p>
      </div>
      <div class="contact-form">
        <form onsubmit="return false">
          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
          <div class="input-box">
            <input type="text" required />
            <span>Full Name</span>
          </div>
          <div class="input-box">
            <input type="text" required />
            <span>Email</span>
          </div>
          <div class="input-box">
            <textarea required></textarea>
            <span>Type your message...</span>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.011468327608!2d28.020966351060316!3d-26.0331807834334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573fe930951e7%3A0xa38207715e98d932!2s39%20Troupant%20Ave%2C%20Magaliessig%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1615116672793!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>`;

  contentContainer.appendChild(contact);
})();

export  default contact;