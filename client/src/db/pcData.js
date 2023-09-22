import {
    pc1, pc2, pc3
} from "../assets/images"

pcData = [
    {
        name: "PC1",
        img: pc1,
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
    }
]