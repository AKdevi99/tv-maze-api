# 🎬 Movie Search App

Welcome to the **Movie Search App**! 🌟 This project allows you to search for your favorite TV shows and view their images and names. Powered by TVmaze API, this app fetches movie data and displays it beautifully. Enjoy the vibrant design and seamless functionality! 🎥

---
![image](https://github.com/user-attachments/assets/c2de2f82-9b75-4ba5-9f5d-350f796f111d)
--

## 🖥️ Project Overview

This app consists of three main files:
- **HTML**: Defines the structure of the web page
- **CSS**: Adds visual styling
- **JavaScript**: Handles the API requests and dynamic content

## 📂 Key Technologies Used


- **HTML**: Structuring the web page
- **CSS**: Styling the page
  - Uses [Bootstrap](https://getbootstrap.com/) for responsive design and UI components
- **JavaScript**: Adding functionality
  - [Axios](https://axios-http.com/) for making HTTP requests to the TVmaze API

## 🔍 How It Works

### 1. **HTML** 📄

The HTML file sets up the layout, including:
- A search bar 🕵️‍♂️
- A search button 🔍
- A container for displaying movie results 🎬

### 2. **CSS** 🎨

The CSS file handles the styling:
- Background gradients and transitions 🌈
- Layout and spacing adjustments 🧩
- Styling for movie items with borders and shadows ✨

### 3. **JavaScript** 🧑‍💻

The JavaScript file includes:
- **Event Listener**: Handles the search button click to fetch and display data
- **API Request**: Uses Axios to get data from the TVmaze API
- **Dynamic Content**: Updates the page with movie details and images

```javascript
const moviebox = document.body.querySelector("#movieimagebox");
const submit = document.body.querySelector("#submit");
const searchbar = document.body.querySelector("#search");

submit.addEventListener("click", function(e) {
    e.preventDefault();
    const name = searchbar.value;
    moviebox.innerHTML = ""; // Clear previous search results
    moviegenerate(name);
});

const moviegenerate = async (name) => {
    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${name}`);
        
        for (let movie of res.data) {
            const image = movie.show.image ? movie.show.image.medium : "images/placeholder.png"; // Local placeholder image
            const showname = movie.show.name;
            const newdiv = document.createElement("DIV");
            const newimg = document.createElement("IMG");
            newimg.classList.add("imgproperties");
            const newp = document.createElement("P");

            newdiv.classList.add("movie-item");

            newimg.src = image;
            newp.textContent = showname;
            newdiv.append(newimg, newp);
            moviebox.append(newdiv);
        }
    } catch (e) {
        console.log("Error:", e);
    }
};
```

## 🚀 How to Run

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/AKdevi99/tv-maze-api.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd movie-search-app
    ```

3. **Open `index.html` in Your Browser**: Double-click on the file or use a local server for better results.

## 📋 Features

- Search for TV shows 📺
- View images and names of shows
- Local placeholder image if no image is available 🖼️

## 💬 Feedback & Contributions

Feel free to open an issue or submit a pull request if you have suggestions or improvements! Let's make this app even better together. 🚀

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 😄👨‍💻👩‍💻
