let  movies = [
    {
      "Title": "Patton Oswalt: Annihilation",
      "fulltitle": "Patton Oswalt: Annihilation (2017)",
      "movie_year": 2017,
      "Categories": "Uncategorized",
      "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
      "ImageURL": "https://m.media-amazon.com/images/M/MV5BNDgwZGVlMDItNzJhZi00NGE3LThkOWYtODE5ODgzNTlhMDA0XkEyXkFqcGdeQXVyMjc0MzU3MzE@._V1_.jpg",
      "imdb_id": "tt7026230",
      "imdb_rating": 7.4,
      "runtime": 66,
      "language": "English",
      "ytid": "4hZi5QaMBFc"
    },
    {
      "Title": "New York Doll",
      "fulltitle": "New York Doll (2005)",
      "movie_year": 2005,
      "Categories": "Documentary|Music",
      "summary": "A recovering alcoholic and recently converted Mormon, Arthur \"Killer\" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.",
      "ImageURL": "https://upload.wikimedia.org/wikipedia/commons/1/16/New_York_Dolls_-_TopPop_1973_11.png",
      "imdb_id": "tt0436629",
      "imdb_rating": 7.9,
      "runtime": 75,
      "language": "English",
      "ytid": "jwD04NsnLLg"
    },
    {
      "Title": "Mickey's Magical Christmas: Snowed in at the House of Mouse",
      "fulltitle": "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
      "movie_year": 2001,
      "Categories": "Adventure|Animation|Comedy|Family|Fantasy",
      "summary": "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
      "ImageURL": "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSi8Jvvz9RMYBXP8QhClWKAZtMHRRWAZiOzZ53oVEvg6hwYHYcuu2jfHT_UsFjut0cf6OyNVRtfHLnZtnjfNPzXFMq9u.jpg?r=f87",
      "imdb_id": "tt0300195",
      "imdb_rating": 6.8,
      "runtime": 65,
      "language": "English",
      "ytid": "uCKwHHftrU4"
    },
    {
      "Title": "Mickey's House of Villains",
      "fulltitle": "Mickey's House of Villains (2001)",
      "movie_year": 2001,
      "Categories": "Animation|Comedy|Family|Fantasy|Horror",
      "summary": "The villains from the popular animated Disney films are gathered at the House of Mouse with plans to take over. Soon, the villains take over the house and kick out Mickey, Donald and Goofy. It's all up to Mickey and his friends to overthrow evil and return the House of Mouse to normal--or as close to normal as it get's.",
      "ImageURL": "https://assets.mubicdn.net/images/film/53901/image-w1280.jpg?1602385219",
      "imdb_id": "tt0329374",
      "imdb_rating": 6.6,
      "runtime": 0,
      "language": "English",
      "ytid": "JA03ciYt-Ek"
    },
    {
      "Title": "And Then I Go",
      "fulltitle": "And Then I Go (2017)",
      "movie_year": 2017,
      "Categories": "Drama",
      "summary": "In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel \"Project X\" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.",
      "ImageURL": "https://static.onecms.io/wp-content/uploads/sites/6/2018/04/anthenigo-2000.jpg",
      "imdb_id": "tt2018111",
      "imdb_rating": 7.6,
      "runtime": 99,
      "language": "English",
      "ytid": "8CdIiD6-iF0"
    }]

let newUl = document.querySelector(".list")

function render() {
    

    for (let i = 0; i < movies.length; i++) {
        let newLi = document.createElement("li")
        newUl.appendChild(newLi)

        for (let j = 0; j < 1; j++) {
            let newImg = document.createElement("img")
            newLi.appendChild(newImg)
            newImg.src = movies[i]["ImageURL"]
            newImg.width = 300
            newImg.height = 200
        }

        for (let j = 0; j < 1; j++) {
            let newText = document.createElement("p")
            newLi.appendChild(newText)
            newText.textContent = movies[i]["Title"]
        }
    }
}

render()


