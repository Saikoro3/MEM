// Data Source
// Covers: purple, gold, red, pink, brown, green, blue (reusing for remaining months)
const memories = [
    {
        month: 4,
        title: "The Beginning",
        coverImage: "./assets/cover_purple.jpg",
        hasPhoto: false,
        caption: "A fresh start. The pages are blank, waiting to be filled with new stories."
    },
    {
        month: 5,
        title: "Golden Hour",
        coverImage: "./assets/cover_gold.jpg",
        hasPhoto: true,
        photoSrc: "./assets/may_memory.jpg", // Placeholder
        caption: "The sunlight hit the leaves just right. A moment of pure gold."
    },
    {
        month: 6,
        title: "Passion",
        coverImage: "./assets/cover_red.jpg",
        hasPhoto: false,
        caption: "Summer heat and vibrant energy. The world feels alive."
    },
    {
        month: 7,
        title: "Blossom",
        coverImage: "./assets/cover_pink.jpg",
        hasPhoto: true,
        photoSrc: "./assets/july_memory.jpg", // Placeholder
        caption: "Soft petals and warm breezes. Everything is blooming."
    },
    {
        month: 8,
        title: "Earth & Sky",
        coverImage: "./assets/cover_brown.jpg",
        hasPhoto: false,
        caption: "Grounding moments. Connecting with the roots of who we are."
    },
    {
        month: 9,
        title: "Growth",
        coverImage: "./assets/cover_green.jpg",
        hasPhoto: true,
        photoSrc: "./assets/sept_memory.jpg", // Placeholder
        caption: "Steady progress. Like a vine climbing towards the light."
    },
    {
        month: 10,
        title: "Deep Dive",
        coverImage: "./assets/cover_blue.jpg",
        hasPhoto: false,
        caption: "Reflecting on the depths. Calm waters run deep."
    },
    {
        month: 11,
        title: "Gratitude",
        coverImage: "./assets/cover_purple.jpg", // Reuse
        hasPhoto: true,
        photoSrc: "./assets/nov_memory.jpg", // Placeholder
        caption: "Thankful for the journey, the loops, and the returns."
    },
    {
        month: 12,
        title: "Reflection",
        coverImage: "./assets/cover_gold.jpg", // Reuse
        hasPhoto: false,
        caption: "Looking back at the year. A golden ending to a beautiful chapter."
    }
];

const monthNames = [
    "", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// DOM Elements
const gridOverlay = document.getElementById('gridOverlay');
const modal = document.getElementById('book-modal');
const viewCover = document.getElementById('view-cover');
const viewContent = document.getElementById('view-content');

// Modal Elements - Cover View
const coverImg = document.getElementById('cover-image');
const coverMonth = document.getElementById('cover-month');
const coverTitle = document.getElementById('cover-title');

// Modal Elements - Content View
const closeBtn = document.getElementById('close-btn');
const photoContainer = document.getElementById('photo-container');
const memoryPhoto = document.getElementById('memory-photo');
const memoryCaption = document.getElementById('memory-caption');

// App Logic
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Grid
    memories.forEach((memory) => {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.month = memory.month;
        cell.addEventListener('click', () => handleGridClick(memory));
        gridOverlay.appendChild(cell);
    });

    // Event Listeners for Modal
    viewCover.addEventListener('click', handleCoverClick);
    closeBtn.addEventListener('click', handleClose);

    console.log("Memory Log PWA Initialized with Book Reveal Logic");
});

// 1. Open Modal (View A)
function handleGridClick(memory) {
    // Populate Data
    coverImg.src = memory.coverImage;
    coverMonth.textContent = `${monthNames[memory.month]} 2025`;
    coverTitle.textContent = memory.title;

    // Store current memory data for the next view
    viewCover.dataset.currentMemoryIndex = memories.indexOf(memory);

    // Show Modal
    modal.classList.remove('hidden');
    viewCover.classList.remove('hidden');
    viewContent.classList.add('hidden');
}

// 2. Open Content (View B)
function handleCoverClick() {
    // Get current memory
    const index = viewCover.dataset.currentMemoryIndex;
    if (index === undefined) return;
    const memory = memories[index];

    // Populate Content
    if (memory.hasPhoto) {
        photoContainer.classList.remove('hidden');
        // Use placeholder if src missing in data, but here we assume logic is sound
        memoryPhoto.src = memory.photoSrc || "";
    } else {
        photoContainer.classList.add('hidden');
    }

    memoryCaption.textContent = memory.caption;

    // Transition
    viewCover.classList.add('hidden');
    setTimeout(() => {
        viewContent.classList.remove('hidden');
    }, 100); // Slight delay for smooth feel
}

// 3. Close Modal
function handleClose(e) {
    e.stopPropagation(); // Prevent bubbling if needed
    modal.classList.add('hidden');

    // Reset views after animation
    setTimeout(() => {
        viewCover.classList.remove('hidden');
        viewContent.classList.add('hidden');
        coverImg.src = ""; // Clear for clean state next time
    }, 400);
}
