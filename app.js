// Data Source
// Covers: purple, gold, red, pink, brown, green, blue (reusing for remaining months)
const memories = [
    {
        id: 1,
        month: 4,
        date: "April 10, 2025",
        title: "The Beginning",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.png",
        hasPhoto: false,
        caption: "A fresh start. The pages are blank, waiting to be filled with new stories."
    },
    {
        id: 2,
        month: 5,
        date: "May 15, 2025",
        title: "Golden Hour",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.png",
        hasPhoto: true,
        photoSrc: "./assets/may_memory.jpg",
        caption: "The sunlight hit the leaves just right. A moment of pure gold."
    },
    {
        id: 3,
        month: 6,
        date: "June 21, 2025",
        title: "Passion",
        coverColor: "red",
        coverImage: "./assets/cover_red.png",
        hasPhoto: false,
        caption: "Summer heat and vibrant energy. The world feels alive."
    },
    {
        id: 4,
        month: 7,
        date: "July 04, 2025",
        title: "Blossom",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.png",
        hasPhoto: true,
        photoSrc: "./assets/july_memory.jpg",
        caption: "Soft petals and warm breezes. Everything is blooming."
    },
    {
        id: 5,
        month: 8,
        date: "August 12, 2025",
        title: "Earth & Sky",
        coverColor: "brown",
        coverImage: "./assets/cover_brown.png",
        hasPhoto: false,
        caption: "Grounding moments. Connecting with the roots of who we are."
    },
    {
        id: 6,
        month: 9,
        date: "Sept 23, 2025",
        title: "Growth",
        coverColor: "green",
        coverImage: "./assets/cover_green.png",
        hasPhoto: true,
        photoSrc: "./assets/sept_memory.jpg",
        caption: "Steady progress. Like a vine climbing towards the light."
    },
    {
        id: 7,
        month: 10,
        date: "Oct 31, 2025",
        title: "Deep Dive",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.png",
        hasPhoto: false,
        caption: "Reflecting on the depths. Calm waters run deep."
    },
    {
        id: 8,
        month: 11,
        date: "Nov 28, 2025",
        title: "Gratitude",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.png",
        hasPhoto: true,
        photoSrc: "./assets/nov_memory.jpg",
        caption: "Thankful for the journey, the loops, and the returns."
    },
    {
        id: 9,
        month: 12,
        date: "Dec 25, 2025",
        title: "Reflection",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.png",
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
const viewCover = document.getElementById('view-cover'); // Keeping for compatibility or cleanup
const viewContent = document.getElementById('view-content');

// New DOM Elements for Month Library
const monthLibrary = document.getElementById('month-library');
const libraryGrid = document.getElementById('library-grid');
const libMonthTitle = document.getElementById('lib-month-title');
const libBackBtn = document.getElementById('lib-back-btn');

// Modal Elements - Content View
const closeBtn = document.getElementById('close-btn');
const photoContainer = document.getElementById('photo-container');
const memoryPhoto = document.getElementById('memory-photo');
const memoryCaption = document.getElementById('memory-caption');

// App Logic
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Grid (Home Screen)
    // We want 1 cell per month. Assuming existing memories data has 1 entry per month.
    // If multiple entries existed, we'd need to deduplicate. For now, 1:1 map.
    memories.forEach((memory) => {
        // Create a grid cell for the month
        // Ideally we check if a cell for this month already exists to avoid duplicates
        if (!document.querySelector(`.grid-cell[data-month="${memory.month}"]`)) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.month = memory.month;
            // When clicking a month, show the library for that month
            cell.addEventListener('click', () => openMonthLibrary(memory.month));
            gridOverlay.appendChild(cell);
        }
    });

    // Event Listeners
    libBackBtn.addEventListener('click', closeMonthLibrary);
    closeBtn.addEventListener('click', closeModal);

    console.log("Memory Log PWA Initialized with Month Library Flow");
});

// 1. Open Month Library (New Layer)
function openMonthLibrary(monthIndex) {
    // Filter memories for this month
    const monthlyMemories = memories.filter(m => m.month === monthIndex);

    // Set Title
    libMonthTitle.textContent = `${monthNames[monthIndex]}`;

    // Clear previous
    libraryGrid.innerHTML = '';

    // Generate Book Cards
    monthlyMemories.forEach(memory => {
        const card = createBookCard(memory);
        libraryGrid.appendChild(card);
    });

    // Show Layer
    monthLibrary.classList.remove('hidden');
}

// Helper: Create Book Card
function createBookCard(memory) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = () => openDetailModal(memory);

    // Book Cover Image
    const img = document.createElement('img');
    // Use coverColor property if available, fallback to existing or construct path
    // Format: ./assets/cover_[color].png
    const color = memory.coverColor || 'blue'; // Default fallback
    img.src = `./assets/cover_${color}.png`; // Ensure extension matches assets (png)
    img.alt = memory.title;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'book-overlay';

    const dateEl = document.createElement('span');
    dateEl.className = 'book-date';
    dateEl.textContent = memory.date || `Month ${memory.month}`;

    const titleEl = document.createElement('span');
    titleEl.className = 'book-title';
    titleEl.textContent = memory.title;

    overlay.appendChild(dateEl);
    overlay.appendChild(titleEl);

    card.appendChild(img);
    card.appendChild(overlay);

    return card;
}

// 2. Open Detail Modal
function openDetailModal(memory) {
    // 1. Reset Views
    // Enforce strict state BEFORE showing modal
    viewContent.classList.remove('show-content');
    viewContent.classList.add('hidden');
    viewCover.classList.remove('hidden', 'flipping');

    // 2. Populate Cover Data (The "Front" of the book)
    const coverImage = document.getElementById('cover-image');
    const coverMonth = document.getElementById('cover-month');
    const coverTitle = document.getElementById('cover-title');

    // Safety check if elements exist (they should)
    if (coverImage) {
        const color = memory.coverColor || 'blue';
        coverImage.src = `./assets/cover_${color}.png`;
    }
    if (coverMonth) coverMonth.textContent = memory.date || `Month ${memory.month}`;
    if (coverTitle) coverTitle.textContent = memory.title;

    // 3. Inject "Diary Page" Structure (The "Inside")
    // Use placeholder service since photos might be missing, and user wants full layout visual.
    const placeholderUrl = `https://picsum.photos/400/300?random=${memory.id}`;
    // Prefer actual photo if available, else placeholder
    const imgSrc = (memory.hasPhoto && memory.photoSrc) ? memory.photoSrc : placeholderUrl;

    viewContent.innerHTML = `
        <div class="diary-entry">
            <button id="close-btn" class="close-btn">&times;</button>
            <div class="diary-date">${memory.date || 'Unknown Date'}</div>
            <div class="diary-photo">
                <img src="${imgSrc}" alt="${memory.title}">
            </div>
            <h3 class="diary-title">${memory.title}</h3>
            <p class="diary-text">${memory.caption}</p>
        </div>
    `;

    // Re-attach Event Listener for the NEW Close Button
    const newCloseBtn = viewContent.querySelector('#close-btn');
    if (newCloseBtn) {
        newCloseBtn.addEventListener('click', closeModal);
    }

    // 4. Set separation of concerns - Listen for the flip
    // Remove old listeners to prevent duplicates if any (simple approach: onlick assignment)
    const coverWrapper = document.querySelector('.cover-wrapper');
    if (coverWrapper) {
        coverWrapper.onclick = (e) => {
            e.stopPropagation();
            revealContent();
        };
    }

    // Only show modal AFTER all states are set
    modal.classList.remove('hidden');
}

// 2b. The Reveal Animation
function revealContent() {
    // Add the class that triggers CSS Transform RotateY
    viewCover.classList.add('flipping');

    // Wait for animation to mostly finish, then swap visibility
    // Matches CSS transition time (0.6s)
    setTimeout(() => {
        viewCover.classList.add('hidden');
        viewContent.classList.remove('hidden');
        viewContent.classList.add('show-content');
    }, 500); // Slightly before 600ms to feel responsive
}

// 3. Navigation Functions
function closeMonthLibrary() {
    monthLibrary.classList.add('hidden');
}

function closeModal(e) {
    if (e) e.stopPropagation();
    modal.classList.add('hidden');
    // Reset views deferred is fine, but openDetailModal handles immediate reset too.
    setTimeout(() => {
        // Clean up
        viewCover.classList.remove('flipping');
    }, 300);
}

// ============================================
// PWA Service Worker Registration
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
} else {
    console.log('ℹ️ Service Worker not supported in this browser');
}
