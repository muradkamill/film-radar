# 🎬 FilmRadar - Movie Search & Trailer Viewer  

FilmRadar is a web application that allows you to search for any movie, get detailed information about it, and watch related YouTube videos. 🍿  

## 📸 Screenshots  
<img width="1470" height="810" alt="Screenshot 2025-09-28 at 18 16 46" src="https://github.com/user-attachments/assets/b89b5039-badb-4ce1-a555-2c68962d52a2" />



### 🔎 Film Search Results  
<img width="1470" height="813" alt="Screenshot 2025-09-28 at 18 17 32" src="https://github.com/user-attachments/assets/4287c3d4-f12e-4182-bf49-df56917d8a00" />

---

## 🚀 Features  
- 🔍 Search for movies by title  
- 📖 View detailed movie information (plot, cast, release year, etc.)  
- 🎥 Watch related YouTube videos  
- 📱 Responsive design for all devices  

---

## 🔧 Installation & Usage  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/muradkamill/FilmRadar.git && cd FilmRadar
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Start the Development Server  
```sh
npm start
```
After running this, the app should be available at **http://localhost:3000/**.  

### 4️⃣ Configure Your API Keys  
Before using the application, make sure to add your own API keys for the movie and YouTube services.  
Edit the file `src/environments/environment.development.ts` and add your API keys as follows:

```typescript
export const environment = {
  production: false,
  movieApiKey: 'YOUR_MOVIE_API_KEY_HERE',
  youtubeApiKey: 'YOUR_YOUTUBE_API_KEY_HERE'
};
```

Replace `'YOUR_MOVIE_API_KEY_HERE'` and `'YOUR_YOUTUBE_API_KEY_HERE'` with your actual API keys. This step is necessary for the app to fetch movie data and related YouTube videos properly.

---

## 📜 License  
This project is licensed under the MIT License.  

---

## 🤝 Contributions  
For more information or to contribute to the project, visit [Film Radar](https://filmradar.netlify.app).
