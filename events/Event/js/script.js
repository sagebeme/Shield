import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("eventName").value;
  const type = document.getElementById("eventType").value;
  const date = document.getElementById("eventDate").value;
  const description = document.getElementById("eventDescription").value;
  const imageFile = document.getElementById("eventImage").files[0];

  let imageUrl = "";

  if (imageFile) {
    const storageRef = ref(storage, `events/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    imageUrl = await getDownloadURL(storageRef);
  }

  await addDoc(collection(db, "events"), {
    name, type, date, description, imageUrl
  });

  form.reset();
  loadEvents();
});

async function loadEvents() {
  eventList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "events"));
  snapshot.forEach(doc => {
    const { name, type, date, description, imageUrl } = doc.data();
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      ${imageUrl ? `<img src="${imageUrl}" alt="${name}" />` : ""}
      <h3>${name}</h3>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p>${description}</p>
    `;
    eventList.appendChild(card);
  });
}

// Load events on page load
document.addEventListener("DOMContentLoaded", loadEvents);
