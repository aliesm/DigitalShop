import axios from "axios";

const apiadress = "http://localhost:5000/products/";

export const ProductsService = {
    getProduct: () => {
        return axios.get(apiadress);
    },

    getProductsByid: (id) => {
        return axios.get(apiadress + id)
    }
}


// const Data = {
//     Products: [{

//         id: 1,
//         title: "HP 15-dy1036nr ",
//         price: "$609.99",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/71WSt8D7KFL._AC_SX679_.jpg",
//         Desc: ` TAKE IT ANYWHERE – With its thin and light design, 6.5 mm micro-edge bezel display, and 82% screen to body ratio, you can take this PC anywhere and see more of what you love (1).
//         REVOLUTIONARY ENTERTAINMENT – Enjoy ultra-wide viewing angles and seamlessly perform multi-monitor set-ups with a 15.6-inch, Full HD, IPS, micro-edge, and anti-glare display (2).
//         IMPRESSIVE GRAPHICS – The Intel Iris Xe Graphics gives you a new level of performance with crisp, stunning visuals, plus the convenience of a thin and light laptop (3).
//         UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i5-1135G7 processor, which delivers instant responsiveness and best-in-class connectivity (4).
//         MEMORY AND STORAGE – Get up to 15x faster performance than a traditional hard drive with 256 GB PCIe NVMe M.2 SSD storage and experience improved multitasking with higher bandwidth thanks to 8 GB of RAM (5).
//         WORK ON THE GO – Get work done on the go with a long battery life of up to 7 hours and 15 minutes (6), while HP Fast Charge lets you go from 0 to 50% charge in approximately 45 minutes (7).
//         OS AND WARRANTY – Do more with greater peace of mind thanks to the familiar feel of the Windows 10 Home operating system and the HP 1-year limited hardware warranty (8). `
//     },
//     {
//         id: 2,
//         title: "2020 Lenovo IdeaPad",
//         price: "$480.00",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/61DrCbSkM4L._AC_SX355_.jpg",
//         Desc: ` 10th Gen Intel Core i5-1035G1 processor.Smart dual-core, four-way processing performance. Intel Turbo Boost Technology delivers dynamic extra power when you need it, while increasing energy efficiency when you don't.
//         15.6" touch screen for hands-on control. Touch, tap, glide and make the most of Windows 10. HD TruBrite technology amps up color and clarity. Typical 1366 x 768 HD resolution. Supports 720p content. Energy-efficient LED backlight.
//         12GB system memory for full-power multitasking.
//         256GB Solid State Drive (PCI-e). Save files fast and store more data. With massive amounts of storage and advanced communication power, PCI-e SSDs are great for major gaming applications, multiple servers, daily backups, and more.
//         Wireless/Wired connectivity (WiFi 5 - 802.11 ac), Built-in HD webcam with microphone. Windows 10 Home. `
//     },
//     {
//         id: 3,
//         title: "Lenovo - IdeaPad L340",
//         price: "$638.00",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/614L9gKcksL._AC_SX522_.jpg",
//         Desc: ` 9th Gen Intel Core i5-9300HF mobile processor
//         15.6" Full HD display , 1920 x 1080 resolution
//         8GB system memory for advanced multitasking
//         256 GB Solid State Drive (PCI-e)
//         NVIDIA GeForce GTX 1650 graphics `
//     },
//     {
//         id: 4,
//         title: "Asus X512DA-BTS2020RL",
//         price: "$540.00",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/61avuUmetYL._AC_SX679_.jpg",
//         Desc: `reduced heat production and power draw on the battery `
//     },
//     {
//         id: 5,
//         title: "HP Pavilion X360  ",
//         price: "$439.00",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/61bf4QPQ0hL._AC_SX355_.jpg",
//         Desc: ` 11.6" 2-in-1 touch screen HD (1366 x 768) IPS WLED backlight Display. Built-in HD webcam with dual array microphone makes it easy to video chat with family and friends or teleconference with colleagues over Skype or other popular applications.
//         4GB system memory can smoothly run multiple applications and browser tabs all at once; 128GB solid state drive (SSD) has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
//         Intel Pentium N5000 processor; With Intel UHD Graphics 605 On-processor graphics with shared video memory provide everyday image quality for Internet use, basic photo editing and casual gaming.
//         High-speed wireless LAN built into the screen,so it connects to your network or hotspots on the most common Wi-Fi standards in both laptop and tablet modes. HDMI output expands your viewing options; Connect to an HDTV or high-def monitor to set up two screens side by side or just see more of the big picture. `
//     },
//     {
//         id: 6,
//         title: "ROG Zephyrus G15 ",
//         price: "$1,162.49",
//         pic: "https://images-na.ssl-images-amazon.com/images/I/71EarUTA6eL._AC_SX450_.jpg",
//         Desc: ` NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 with ROG Boost (Base 1140MHz Boost 1335MHz TDP 60W)
//         AMD Ryzen 7 4800HS processor (up to 4.2GHz)
//         15.6” 144Hz IPS-Type Full HD (1920x1080) display
//         16GB 3200MHz DDR4 RAM | 1TB PCIe NVMe M 2 SSD | Backlit Precision Gaming Keyboard | Windows 10 Home
//         0.8” thin, 4.85 pound ultra-portable form-factor
//         Gig+ Wi-Fi 6 (802.11ax) | USB Type-C charging capable
//         ROG Intelligent Cooling system with self-cleaning anti-dust tunnels preserves cooling performance and system stability `
//     },
//     ]
// }

// export const ProductService = {
//     getProduct:()=>{
//       return  Data.Products.slice();
//     },

//     getProductByid:(id)=>{
//       return  Data.Products.find(item => item.id.toString() === id.toString())
//     }   
// };
