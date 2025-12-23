// Data Source
// Covers: purple, gold, red, pink, brown, green, blue (reusing for remaining months)
// Gallery arrays contain AVIF scrapbook pages for horizontal scroll viewing
const memories = [
    {
        id: 41,
        month: 4,
        date: "March 7",
        title: "Cosmos",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0307_cosmos/0307-1.avif",
            "./assets/memories/0307_cosmos/0307-2.avif",
            "./assets/memories/0307_cosmos/0307-3.avif",
            "./assets/memories/0307_cosmos/0307-4.avif",
            "./assets/memories/0307_cosmos/0307-5.avif",
            "./assets/memories/0307_cosmos/0307-6.avif",
            "./assets/memories/0307_cosmos/0307-7.avif",
        ]
    },
    {
        id: 42,
        month: 4,
        date: "March 30",
        title: "Machida",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/0330_machida/0330-1.avif",
            "./assets/memories/0330_machida/0330-2.avif",
            "./assets/memories/0330_machida/0330-3.avif",
            "./assets/memories/0330_machida/0330-4.avif"
        ]
    },
    {
        id: 1,
        month: 4,
        date: "April 9",
        title: "Shibuya",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/0409_shibuya/0409-1.avif",
            "./assets/memories/0409_shibuya/0409-2.avif",
            "./assets/memories/0409_shibuya/0409-3.avif",
            "./assets/memories/0409_shibuya/0409-4.avif",
            "./assets/memories/0409_shibuya/0409-5.avif",
            "./assets/memories/0409_shibuya/0409-6.avif"
        ]
    },
    {
        id: 15,
        month: 4,
        date: "April 18",
        title: "Tamachi",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0418_tamachi/0412-1.avif",
            "./assets/memories/0418_tamachi/0412-2.avif",
            "./assets/memories/0418_tamachi/0418-3.avif",
            "./assets/memories/0418_tamachi/0418-4.avif",
            "./assets/memories/0418_tamachi/0418-5.avif",
            "./assets/memories/0418_tamachi/0418-6.avif"
        ]
    },
    {
        id: 24,
        month: 4,
        date: "April 21",
        title: "Tukimino",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/0421_tukimino/0421-1.avif",
            "./assets/memories/0421_tukimino/0421-2.avif",
            "./assets/memories/0421_tukimino/0421-3.avif"
        ]
    },
    {
        id: 16,
        month: 4,
        date: "April 25",
        title: "Tyuorinkan",
        coverColor: "red",
        coverImage: "./assets/cover_red.webp",
        gallery: [
            "./assets/memories/0425_tyuorinkan/0425-1.avif",
            "./assets/memories/0425_tyuorinkan/0425-2.avif"
        ]
    },
    {
        id: 17,
        month: 4,
        date: "April 30",
        title: "Ebina",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0430_ebina/0430-1.avif",
            "./assets/memories/0430_ebina/0430-2.avif",
            "./assets/memories/0430_ebina/0430-3.avif",
            "./assets/memories/0430_ebina/0430-4.avif"
        ]
    },
    {
        id: 25,
        month: 4,
        date: "April",
        title: "Ebina",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/04_ebina/04-1.avif",
            "./assets/memories/04_ebina/04-2.avif",
            "./assets/memories/04_ebina/04-3.avif",
            "./assets/memories/04_ebina/04-4.avif"
        ]
    },
    {
        id: 2,
        month: 5,
        date: "May 7",
        title: "Manazuru",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0507manazuru/0507-1.avif",
            "./assets/memories/0507manazuru/0507-2.avif",
            "./assets/memories/0507manazuru/0507-3.avif",
            "./assets/memories/0507manazuru/0507-4.avif",
            "./assets/memories/0507manazuru/0507-5.avif",
            "./assets/memories/0507manazuru/0507-6.avif",
            "./assets/memories/0507manazuru/0507-7.avif",
            "./assets/memories/0507manazuru/0507-8.avif"
        ]
    },
    {
        id: 12,
        month: 5,
        date: "May 12",
        title: "Enoshima",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/0512_enoshima/0512-1.avif",
            "./assets/memories/0512_enoshima/0512-2.avif",
            "./assets/memories/0512_enoshima/0512-3.avif",
            "./assets/memories/0512_enoshima/0512-4.avif",
            "./assets/memories/0512_enoshima/0512-5.avif",
            "./assets/memories/0512_enoshima/0512-6.avif"
        ]
    },
    {
        id: 18,
        month: 5,
        date: "May 17",
        title: "Odasaga-Sagamiono",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/0517_odasaga-sagamiono/0517-1.avif",
            "./assets/memories/0517_odasaga-sagamiono/0517-2.avif",
            "./assets/memories/0517_odasaga-sagamiono/0517-3.avif",
            "./assets/memories/0517_odasaga-sagamiono/0517-4.avif"
        ]
    },
    {
        id: 19,
        month: 5,
        date: "May 21",
        title: "Kitijoji",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/0521_kitijoji/0521-1.avif",
            "./assets/memories/0521_kitijoji/0521-2.avif",
            "./assets/memories/0521_kitijoji/0521-3.avif",
            "./assets/memories/0521_kitijoji/0521-4.avif"
        ]
    },
    {
        id: 20,
        month: 5,
        date: "May 29",
        title: "Tyuorinkan",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0529_tyuorinkan/0529-1.avif"
        ]
    },
    {
        id: 21,
        month: 5,
        date: "May 30",
        title: "Ebina",
        coverColor: "red",
        coverImage: "./assets/cover_red.webp",
        gallery: [
            "./assets/memories/0530_ebina/0530-1.avif",
            "./assets/memories/0530_ebina/0530-2.avif",
            "./assets/memories/0530_ebina/0530-3.avif",
            "./assets/memories/0530_ebina/0530-4.avif"
        ]
    },
    {
        id: 22,
        month: 6,
        date: "June 6",
        title: "Tyuorinakn",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0606_tyuorinakn/0606-1.avif",
            "./assets/memories/0606_tyuorinakn/0606-2.avif",
            "./assets/memories/0606_tyuorinakn/0606-3.avif"
        ]
    },
    {
        id: 13,
        month: 6,
        date: "June 8",
        title: "Sagamiono",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/0608_sagamiono/0608-1.avif",
            "./assets/memories/0608_sagamiono/0608-2.avif",
            "./assets/memories/0608_sagamiono/0608-3.avif",
            "./assets/memories/0608_sagamiono/0608-4.avif"
        ]
    },
    {
        id: 23,
        month: 6,
        date: "June 11",
        title: "Yamato",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/0611_yamato/0611-1.avif",
            "./assets/memories/0611_yamato/0611-2.avif",
            "./assets/memories/0611_yamato/0611-3.avif"
        ]
    },
    {
        id: 14,
        month: 6,
        date: "June 15",
        title: "Ami's Birthday",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0615_ami'sbirthday/0615-1.avif",
            "./assets/memories/0615_ami'sbirthday/0615-2.avif",
            "./assets/memories/0615_ami'sbirthday/0615-3.avif",
            "./assets/memories/0615_ami'sbirthday/0615-4.avif",
            "./assets/memories/0615_ami'sbirthday/0615-5.avif",
            "./assets/memories/0615_ami'sbirthday/0615-6.avif",
            "./assets/memories/0615_ami'sbirthday/0615-7.avif",
            "./assets/memories/0615_ami'sbirthday/0615-8.avif",
            "./assets/memories/0615_ami'sbirthday/0615-9.avif",
            "./assets/memories/0615_ami'sbirthday/0615-10.avif",
            "./assets/memories/0615_ami'sbirthday/0615-11.avif",
            "./assets/memories/0615_ami'sbirthday/0615-12.avif",
            "./assets/memories/0615_ami'sbirthday/0615-13.avif",
            "./assets/memories/0615_ami'sbirthday/0615-14.avif",
            "./assets/memories/0615_ami'sbirthday/0615-15.avif"
        ]
    },
    {
        id: 26,
        month: 6,
        date: "June 25",
        title: "Machida",
        coverColor: "red",
        coverImage: "./assets/cover_red.webp",
        gallery: [
            "./assets/memories/0625_machida/0625-1.avif",
            "./assets/memories/0625_machida/0625-2.avif",
            "./assets/memories/0625_machida/0625-3.avif",
            "./assets/memories/0625_machida/0625-4.avif",
            "./assets/memories/0625_machida/0625-5.avif"
        ]
    },
    {
        id: 27,
        month: 6,
        date: "June 30",
        title: "Kamakura",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/0630_kamakura/0630-1.avif",
            "./assets/memories/0630_kamakura/0630-2.avif",
            "./assets/memories/0630_kamakura/0630-3.avif",
            "./assets/memories/0630_kamakura/0630-4.avif"
        ]
    },
    {
        id: 4,
        month: 7,
        date: "July 7",
        title: "Honatsugi",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0707honatsugi/0707-1.avif",
            "./assets/memories/0707honatsugi/0707-2.avif",
            "./assets/memories/0707honatsugi/0707-3.avif",
            "./assets/memories/0707honatsugi/0707-4.avif",
            "./assets/memories/0707honatsugi/0707-5.avif"
        ]
    },
    {
        id: 28,
        month: 7,
        date: "July 27",
        title: "Sagamiono",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0727_sagamiono/0727-1.avif"
        ]
    },
    {
        id: 11,
        month: 8,
        date: "August 14",
        title: "Himawari",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0814himawari/0814-1.avif",
            "./assets/memories/0814himawari/0814-2.avif",
            "./assets/memories/0814himawari/0814-3.avif",
            "./assets/memories/0814himawari/0814-4.avif",
            "./assets/memories/0814himawari/0814-5.avif",
            "./assets/memories/0814himawari/0814-6.avif",
            "./assets/memories/0814himawari/0814-7.avif",
            "./assets/memories/0814himawari/0814-8.avif",
            "./assets/memories/0814himawari/0814-9.avif",
            "./assets/memories/0814himawari/0814-10.avif",
            "./assets/memories/0814himawari/0814-11.avif",
            "./assets/memories/0814himawari/0814-12.avif",
            "./assets/memories/0814himawari/0814-13.avif",
            "./assets/memories/0814himawari/0814-14.avif",
            "./assets/memories/0814himawari/0814-15.avif",
            "./assets/memories/0814himawari/0814-16.avif"
        ]
    },
    {
        id: 5,
        month: 8,
        date: "August 25",
        title: "Atami",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/0825_atami/0825-1.avif",
            "./assets/memories/0825_atami/0825-2.avif",
            "./assets/memories/0825_atami/0825-3.avif",
            "./assets/memories/0825_atami/0825-4.avif",
            "./assets/memories/0825_atami/0825-5.avif",
            "./assets/memories/0825_atami/0825-6.avif",
            "./assets/memories/0825_atami/0825-7.avif",
            "./assets/memories/0825_atami/0825-8.avif",
            "./assets/memories/0825_atami/0825-9.avif",
            "./assets/memories/0825_atami/0825-10.avif",
            "./assets/memories/0825_atami/0825-11.avif",
            "./assets/memories/0825_atami/0825-12.avif",
            "./assets/memories/0825_atami/0825-13.avif",
            "./assets/memories/0825_atami/0825-14.avif",
            "./assets/memories/0825_atami/0825-15.avif"
        ]
    },
    {
        id: 29,
        month: 8,
        date: "August 4",
        title: "Shimokita",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/0804_shimokita/0804-1.avif",
            "./assets/memories/0804_shimokita/0804-2.avif"
        ]
    },
    {
        id: 30,
        month: 8,
        date: "August 30",
        title: "Ebina",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/0830_ebina/0830-1.avif"
        ]
    },
    {
        id: 6,
        month: 9,
        date: "September 3",
        title: "Machida",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/0903_machida/0903-1.avif",
            "./assets/memories/0903_machida/0903-2.avif",
            "./assets/memories/0903_machida/0903-3.avif",
            "./assets/memories/0903_machida/0903-4.avif",
            "./assets/memories/0903_machida/0903-5.avif",
            "./assets/memories/0903_machida/0903-6.avif"
        ]
    },
    {
        id: 31,
        month: 9,
        date: "September 19",
        title: "Shimokita",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/0919_shimokita/0919-1.avif"
        ]
    },
    {
        id: 32,
        month: 9,
        date: "September 21",
        title: "GraPa",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/0921_grapa/0921-1.avif",
            "./assets/memories/0921_grapa/0921-2.avif",
            "./assets/memories/0921_grapa/0921-3.avif",
            "./assets/memories/0921_grapa/0921-4.avif"
        ]
    },
    {
        id: 33,
        month: 9,
        date: "September 30",
        title: "Yokohama",
        coverColor: "red",
        coverImage: "./assets/cover_red.webp",
        gallery: [
            "./assets/memories/0930_yokohama/0930-1.avif",
            "./assets/memories/0930_yokohama/0930-2.avif",
            "./assets/memories/0930_yokohama/0930-3.avif"
        ]
    },
    {
        id: 34,
        month: 10,
        date: "October 5",
        title: "Machida",
        coverColor: "green",
        coverImage: "./assets/cover_green.webp",
        gallery: [
            "./assets/memories/1005_machida/1005-1.avif"
        ]
    },
    {
        id: 35,
        month: 10,
        date: "October 11",
        title: "Shimokita",
        coverColor: "pink",
        coverImage: "./assets/cover_pink.webp",
        gallery: [
            "./assets/memories/1011_shimokita/1011-1.avif",
            "./assets/memories/1011_shimokita/1011-2.avif",
            "./assets/memories/1011_shimokita/1011-3.avif",
            "./assets/memories/1011_shimokita/1011-4.avif",
            "./assets/memories/1011_shimokita/1011-5.avif",
            "./assets/memories/1011_shimokita/1011-6.avif"
        ]
    },
    {
        id: 36,
        month: 10,
        date: "October 19",
        title: "Yamato",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/1019_yamato/1019-1.avif",
            "./assets/memories/1019_yamato/1019-2.avif",
            "./assets/memories/1019_yamato/1019-3.avif"
        ]
    },
    {
        id: 37,
        month: 10,
        date: "October 22",
        title: "Mizonokuchi",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/1022_mizonokuchi/1022-1.avif",
            "./assets/memories/1022_mizonokuchi/1022-2.avif",
            "./assets/memories/1022_mizonokuchi/1022-3.avif"
        ]
    },
    {
        id: 7,
        month: 10,
        date: "October 29",
        title: "Ebina",
        coverColor: "blue",
        coverImage: "./assets/cover_blue.webp",
        gallery: [
            "./assets/memories/1029_ebina/1029-1.avif",
            "./assets/memories/1029_ebina/1029-2.avif",
            "./assets/memories/1029_ebina/1029-3.avif",
            "./assets/memories/1029_ebina/1029-4.avif",
            "./assets/memories/1029_ebina/1029-5.avif",
            "./assets/memories/1029_ebina/1029-6.avif",
            "./assets/memories/1029_ebina/1029-7.avif",
            "./assets/memories/1029_ebina/1029-8.avif"
        ]
    },
    {
        id: 10,
        month: 11,
        date: "November 3",
        title: "Machida",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/1103_matchida/1103-1.avif",
            "./assets/memories/1103_matchida/1103-2.avif",
            "./assets/memories/1103_matchida/1103-3.avif"
        ]
    },
    {
        id: 8,
        month: 11,
        date: "November 9",
        title: "Ebina Date",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/1109_ebina/1109-1.avif",
            "./assets/memories/1109_ebina/1109-2.avif",
            "./assets/memories/1109_ebina/1109-3.avif",
            "./assets/memories/1109_ebina/1109-4.avif"
        ]
    },
    {
        id: 38,
        month: 11,
        date: "November 25",
        title: "Machida",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/1125_machida/1125-1.avif",
            "./assets/memories/1125_machida/1125-2.avif",
            "./assets/memories/1125_machida/1125-3.avif"
        ]
    },
    {
        id: 39,
        month: 11,
        date: "November 27",
        title: "Tamaplaza",
        coverColor: "red",
        coverImage: "./assets/cover_red.webp",
        gallery: [
            "./assets/memories/1127_tamaplaza/1127-1.avif",
            "./assets/memories/1127_tamaplaza/1127-2.avif"
        ]
    },
    {
        id: 9,
        month: 12,
        date: "December 7",
        title: "Okutama Adventure",
        coverColor: "gold",
        coverImage: "./assets/cover_gold.webp",
        gallery: [
            "./assets/memories/1207_okutama/1207-1.avif",
            "./assets/memories/1207_okutama/1207-2.avif",
            "./assets/memories/1207_okutama/1207-3.avif",
            "./assets/memories/1207_okutama/1207-4.avif",
            "./assets/memories/1207_okutama/1207-5.avif",
            "./assets/memories/1207_okutama/1207-6.avif",
            "./assets/memories/1207_okutama/1207-7.avif",
            "./assets/memories/1207_okutama/1207-8.avif",
            "./assets/memories/1207_okutama/1207-9.avif",
            "./assets/memories/1207_okutama/1207-10.avif",
            "./assets/memories/1207_okutama/1207-11.avif",
            "./assets/memories/1207_okutama/1207-12.avif",
            "./assets/memories/1207_okutama/1207-13.avif",
            "./assets/memories/1207_okutama/1207-14.avif",
            "./assets/memories/1207_okutama/1207-15.avif",
            "./assets/memories/1207_okutama/1207-16.avif",
            "./assets/memories/1207_okutama/1207-17.avif"
        ]
    },
    {
        id: 40,
        month: 12,
        date: "December 12",
        title: "Takanawa",
        coverColor: "purple",
        coverImage: "./assets/cover_purple.webp",
        gallery: [
            "./assets/memories/1212_takanawa/1212-1.avif",
            "./assets/memories/1212_takanawa/1212-2.avif",
            "./assets/memories/1212_takanawa/1212-3.avif",
            "./assets/memories/1212_takanawa/1212-4.avif",
            "./assets/memories/1212_takanawa/1212-5.avif",
            "./assets/memories/1212_takanawa/1212-6.avif",
            "./assets/memories/1212_takanawa/1212-7.avif",
            "./assets/memories/1212_takanawa/1212-8.avif"
        ]
    }
];

// Carousel State
let currentGallery = [];
let currentGalleryIndex = 0;

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
    // Format: ./assets/cover_[color].webp
    const color = memory.coverColor || 'blue'; // Default fallback
    img.src = `./assets/cover_${color}.webp`; // Ensure extension matches assets (webp)
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

// 2. Open Detail Modal (Optimistic UI - Instant Feedback)
function openDetailModal(memory) {
    // 1. Reset Views - Enforce strict state BEFORE showing modal
    viewContent.classList.remove('show-content');
    viewContent.classList.add('hidden');
    viewCover.classList.remove('hidden', 'flipping');

    // 2. Get Cover Elements
    const coverImage = document.getElementById('cover-image');
    const coverMonth = document.getElementById('cover-month');
    const coverTitle = document.getElementById('cover-title');
    const coverWrapper = document.querySelector('.cover-wrapper');

    // 3. INSTANT FEEDBACK: Set solid background color FIRST
    const color = memory.coverColor || 'blue';
    const colorMap = {
        'purple': '#4a2c6d',
        'gold': '#c9a227',
        'red': '#8b2635',
        'pink': '#d4638e',
        'brown': '#5c4033',
        'green': '#2d5a3d',
        'blue': '#2c4a7f'
    };
    const bgColor = colorMap[color] || '#2c4a7f';

    if (coverWrapper) {
        coverWrapper.style.backgroundColor = bgColor;
    }

    // 4. Populate text immediately (no blocking)
    if (coverMonth) coverMonth.textContent = memory.date || `Month ${memory.month}`;
    if (coverTitle) coverTitle.textContent = memory.title;

    // 5. SHOW MODAL IMMEDIATELY - Don't wait for images!
    modal.classList.remove('hidden');

    // 6. Load cover image ASYNCHRONOUSLY with fade-in
    if (coverImage) {
        coverImage.classList.add('loading'); // Start transparent
        coverImage.onload = () => {
            coverImage.classList.remove('loading');
            coverImage.classList.add('loaded'); // Fade in
        };
        coverImage.onerror = () => {
            // If image fails, just show the solid color (already visible)
            coverImage.classList.add('loading');
        };
        // Set src AFTER modal is visible to trigger async load
        coverImage.src = `./assets/cover_${color}.webp`;
    }

    // 7. Initialize Gallery for horizontal scroll
    currentGallery = memory.gallery && memory.gallery.length > 0
        ? memory.gallery
        : [];
    currentGalleryIndex = 0;

    // 8. Build AVIF Scrapbook Gallery (Full-page horizontal scroll)
    let galleryImagesHTML = '';
    if (currentGallery.length > 0) {
        currentGallery.forEach((imgPath, index) => {
            galleryImagesHTML += `<img src="${imgPath}" alt="Scrapbook page ${index + 1}" class="gallery-image">`;
        });
    } else {
        // Fallback if no gallery images
        galleryImagesHTML = `<div class="gallery-empty">No scrapbook pages available</div>`;
    }

    viewContent.innerHTML = `
        <button id="close-btn" class="close-btn">&times;</button>
        <div class="gallery-container">
            ${galleryImagesHTML}
        </div>
    `;

    // 9. Re-attach Event Listener for the NEW Close Button
    const newCloseBtn = viewContent.querySelector('#close-btn');
    if (newCloseBtn) {
        newCloseBtn.addEventListener('click', closeModal);
    }

    // 10. Set up flip interaction for cover
    if (coverWrapper) {
        coverWrapper.onclick = (e) => {
            e.stopPropagation();
            revealContent();
        };
    }
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

// Carousel Navigation Function
function navigateCarousel(direction) {
    if (currentGallery.length <= 1) return;

    // Calculate new index with looping
    currentGalleryIndex = (currentGalleryIndex + direction + currentGallery.length) % currentGallery.length;

    const carouselImg = document.getElementById('carousel-image');
    const counter = document.getElementById('carousel-counter');

    if (carouselImg) {
        // Fade out
        carouselImg.classList.remove('loaded');
        carouselImg.classList.add('loading');

        // Change image source
        setTimeout(() => {
            carouselImg.src = currentGallery[currentGalleryIndex];
        }, 150);
    }

    // Update counter
    if (counter) {
        counter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;
    }
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
