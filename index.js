// Array of songs
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
];

// Guardians' preferred genres
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlists
function generatePlaylist(guardians, songs) {
    let playlists = {};
    
    //This loops through each gaurdian and filter songs by their prefered genre
    Object.entries(guardians).forEach(([name, preferredGenre]) => {
        playlists[name] = songs.filter(song => song.genre === preferredGenre);
    });

    return playlists; // return the generated playlists object
}

// Function to display playlists dynamically
function displayPlaylists(playlists) {
    const container = document.getElementById("playlists");
    container.innerHTML = ""; // Clear previous content

    Object.entries(playlists).forEach(([guardian, playlist]) => {
        const section = document.createElement("div");
        section.classList.add("playlist");

        const title = document.createElement("h2");
        title.textContent = `${guardian}'s Playlist 🎵`;
        section.appendChild(title);

        const list = document.createElement("ul");
        playlist.forEach(song => {
            const listItem = document.createElement("li");
            listItem.textContent = `${song.title} - ${song.artist}`;
            list.appendChild(listItem);
        });

        section.appendChild(list);
        container.appendChild(section);
    });
}

// Generate and display the playlists
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
