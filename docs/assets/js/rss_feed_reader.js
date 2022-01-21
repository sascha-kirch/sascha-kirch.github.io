const RSS_URL = `https://cors-anywhere.herokuapp.com/https://medium.com/feed/@SaschaKirch`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
          <h2>
          T
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });
