import {
    pc1, pc2, pc3
} from "../assets/images"

export const pcData = [
    {
        name: "PC1",
        price: 1500,
        img: pc1,
        pcCase: {
            brand: "Lian Li",
            model: "PC-0011 Dynamic Razer Edition",
            color: "Black"
        },
        motherboard: {
            brand: "ASUS",
            model: "TUF B550-PLUS",
            socket: "AM4",
            chipset: "AMD B450",
            memory: {
                maxQuantity: 4,
                generation: "DDR4"
            },
            formFactor: "ATX"
        },
        cpu: {
            brand: "AMD",
            model: "Ryzen 7 3700x",
            soclet: "AM4",
            cores: 8,
            threads: 16,
            baseClock: 3.60,
            boostClock: 4.40
        },
        AIO: {
            brand: "NZXT",
            model: "Kraken Z73",
            fans: 3,
            fanSize: 120,
            features: ["RGB","Animated LCD"]
        },
        memory: {
            quantity: 4,
            memoryList: [
                {
                    brand: "TEAMGROUP",
                    model: "T-Force Xtreem ARGB",
                    size: 8,
                    speed: 4000
                },
                {
                    brand: "TEAMGROUP",
                    model: "T-Force Xtreem ARGB",
                    size: 8,
                    speed: 4000
                },
                {
                    brand: "TEAMGROUP",
                    model: "T-Force Xtreem ARGB",
                    size: 8,
                    speed: 4000
                },
                {
                    brand: "TEAMGROUP",
                    model: "T-Force Xtreem ARGB",
                    size: 8,
                    speed: 4000
                }
            ]
        },
        graphicsCard: {
            brand: "MSI",
            model: "RTX 3060 VENTUS 2X OC",
            memory: 12,
            speed: 15,
            coreClocks: 1807,
            cudaCores: 3584,
            pins: [6],
            power: 170,
            recommendedPower: 550,
            output: [
                "Display Port",
                "Display Port",
                "Display Port",
                "HDMI"
            ]
        },
        storage: [
            {
                type: "SSD",
                brand: "Samsung",
                model: "870 EVO",
                size: 2.5,
                speed: 560,
                capacity: 250
            },
            {
                type: "HDD",
                brand: "Seagate",
                model: "Barracuda",
                size: 3.5,
                speed: 7200,
                capacity: 2000
            },
            
        ],
        powerSupply: {
            brand: "EVGA",
            model: "SuperNOVA 750 GA",
            capacity: 750,
            modular: true,
            certification: ["gold", 80]
        }
    },
    {
        name: "PC2",
        price: 600,
        img: pc2,
        pcCase: {
            brand: "INWIN",
            model: "A1 Plus",
            color: "Black"
        },
        motherboard: {
            brand: "Gigabyte",
            model: "B450 I AORUS PRO WIFI",
            socket: "AM4",
            chipset: "AMD B450",
            memory: {
                maxQuantity: 2,
                generation: "DDR4"
            },
            formFactor: "Mini ITX"
        },
        cpu: {
            brand: "AMD",
            model: "Ryzen 5 3600",
            soclet: "AM4",
            cores: 6,
            threads: 12,
            baseClock: 3.60,
            boostClock: 4.20
        },
        memory: {
            quantity: 2,
            memoryList: [
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                },
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                },
            ]
        },
        graphicsCard: {
            brand: "Zotac",
            model: "GTX 1650 OC",
            memory: 4,
            speed: 16,
            coreClocks: 1755,
            cudaCores: 1280,
            pins: [0],
            power: 75,
            recommendedPower: 350,
            output: [
                "DVI",
                "Display Port",
                "HDMI"
            ]
        },
        storage: [
            {
                type: "M.2",
                brand: "Kingston",
                model: "NV2",
                size: 3.15,
                speed: 3500,
                capacity: 256
            },
        ],
        powerSupply: {
            brand: "EVGA",
            model: "500W",
            capacity: 500,
            modular: false,
            certification: ["silver", 80]
        }
    },
    {
        name: "PC3",
        price: 600,
        img: pc3,
        pcCase: {
            brand: "Musetex",
            model: "White",
            color: "White"
        },
        motherboard: {
            brand: "MSI",
            model: "B450 Mortar Titanium",
            socket: "AM4",
            chipset: "AMD B450",
            memory: {
                maxQuantity: 4,
                generation: "DDR4"
            },
            formFactor: "Micro ATX"
        },
        cpu: {
            brand: "AMD",
            model: "Ryzen 5 3600",
            soclet: "AM4",
            cores: 6,
            threads: 12,
            baseClock: 3.60,
            boostClock: 4.20
        },
        memory: {
            quantity: 4,
            memoryList: [
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                },
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                },
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                },
                {
                    brand: "Corsair",
                    model: "Vengance",
                    size: 8,
                    speed: 3200
                }
            ]
        },
        graphicsCard: {
            brand: "MSI",
            model: "GTX 1650 Super",
            memory: 4,
            speed: 12,
            coreClocks: 1755,
            cudaCores: 1280,
            pins: [6],
            power: 100,
            recommendedPower: 350,
            output: [
                "Display Port",
                "Display Port",
                "Display Port",
                "HDMI"
            ]
        },
        storage: [
            {
                type: "HDD",
                brand: "Seagate",
                model: "BarraCuda",
                size: 3.5,
                speed: 7200,
                capacity: 1000
            },
            {
                type: "HDD",
                brand: "Western Digital",
                model: "Blue",
                size: 3.5,
                speed: 7200,
                capacity: 2000
            },
            {
                type: "M.2",
                brand: "XPG",
                model: "Spectrix",
                size: 3.15,
                speed: 3500,
                capacity: 512
            },
            
        ],
        powerSupply: {
            brand: "EVGA",
            model: "500W",
            capacity: 500,
            modular: false,
            certification: ["silver", 80]
        }
    },
]