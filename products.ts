const products = [
    {
        "name": "Apple IPhone 11 Pro Max",
        "productType": "phone",
        "rating": 5,
        "price": 610,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/iphone2.jpeg?alt=media&token=669f588f-6fb1-47f6-9aef-a0f132e8e71c",
        "description": "Apple IPhone 11 Pro Max black color 64GB 4GB RAM",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "Apple",
            "model": "IPhone 11 Pro Max",
            "os": "ios",
            "Size": 6.5,
            "Resolution": "2688 x 1242 pixels, 19.5:9 ratio (~458 ppi density)",
            "CPU": "Apple A13 Bionic (7 nm+), Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
            "Memory": 64,
            "RAM": 4,
            "Selfie Camera": "12 MP",
            "Main Camera": "12 MP",
            "Battery": "3969 mAh",
            "color": "black"
        }
    },
    {
        "name": "Apple IPhone 11",
        "productType": "phone",
        "rating": 5,
        "price": 499,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/iphone5.jpeg?alt=media&token=7b6b71ab-b828-4f8e-b7ed-ab1c399675fc",
        "description": "Apple IPhone 11 black color 64GB 4GB RAM",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "Apple",
            "model": "IPhone 11",
            "os": "ios",
            "Size": 6.1,
            "Resolution": "1792 x 828 pixels, 19.5:9 ratio (~458 ppi density)",
            "CPU": "Apple A13 Bionic (7 nm+), Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",
            "Memory": 64,
            "RAM": 4,
            "Selfie Camera": "12 MP",
            "Main Camera": "12 MP",
            "Battery": "3110 mAh",
            "color": "black"
        }
    },
    {
        "name": "Apple IPhone 12",
        "productType": "phone",
        "rating": 5,
        "price": 750,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/iphone12.jpg?alt=media&token=673dd7f3-2a15-4b4c-914c-4acb4b8115bc",
        "description": "New brand Apple IPhone 12 black color 128GB 4GB RAM",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "Apple",
            "model": "IPhone 12",
            "os": "ios",
            "Size": 6.1,
            "Resolution": "2532 x 1170 pixels, 19.5:9 ratio (~458 ppi density)",
            "CPU": "Apple A14 Bionic (5 nm), Hexa-core (2 high performance Firestorm @ 3.1 GHz + 4 energy-saving Icestorm)",
            "Storage": 128,
            "RAM": 4,
            "Selfie Camera": "12 MP",
            "Main Camera": "12 MP",
            "Battery": "2815 mAh",
            "color": "black"
        }
    },
    {
        "name": "OnePlus 8 pro",
        "productType": "phone",
        "rating": 5,
        "price": 799,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/iphone12.jpg?alt=media&token=673dd7f3-2a15-4b4c-914c-4acb4b8115bc",
        "description": "One plus 8 Pro max black color 256GB 8GB RAM",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "OnePlus",
            "model": "8 Pro",
            "os": "android",
            "Size": 6.78,
            "Resolution": "3168 x 1440",
            "CPU": "Snapdragon 865 Qualcomm 2.84 GHz",
            "Storage": 256,
            "RAM": 8,
            "Selfie Camera": "16 MP",
            "Main Camera": "48 MP, 8 MP, 48 MP, 5 MP",
            "Battery": "4510 mAh",
            "color": "black"
        }
    },
    {
        "name": "Samsung Galaxy A52",
        "productType": "phone",
        "rating": 5,
        "price": 320,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/galaxy%20a52.jpg?alt=media&token=36f5ea71-acd6-4b8a-ab7e-574acf881ea0",
        "qty": 1,
        "description": "",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "Samsung",
            "model": "Galaxy A52",
            "Size": 6.5,
            "os": "android",
            "Resolution": "2400 x 1080",
            "CPU": "Qualcomm SM7125 Snapdragon 720G 2.3 GHz",
            "Storage": 128,
            "RAM": 8,
            "Selfie Camera": "32 MP",
            "Main Camera": "64 MP, 12 MP, 5 MP, 5 MP",
            "Battery": "4500 mAh",
            "color": "black"
        }
    },
    {
        "name": "Xiaomi Redmi Note 9 Pro",
        "productType": "phone",
        "rating": 5,
        "price": 299,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/redmi%20note%209%20pro.jpg?alt=media&token=c4d51a47-36fd-4e76-bed7-82380604d496",
        "description": "",
        "categories": ["electronics", "phones"],
        "features": {
            "brand": "Xiaomi",
            "model": "Redmi Note 9 Pro",
            "Size": 6.67,
            "Resolution": "2400 x 1080",
            "os": "android",
            "CPU": "Qualcomm SM7125 Snapdragon 2.3 GHz",
            "Storage": 128,
            "RAM": 6,
            "Selfie Camera": "16 MP",
            "Main Camera": "64 MP, 8 MP, 8 MP, 2 MP",
            "Battery": "6020 mAh",
            "color": "black"
        }
    },
    {
        "name": "Adidas Pant 1",
        "productType": "pant",
        "rating": 5,
        "price": 33,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/adidas-pant-1.jpg?alt=media&token=b6269a33-d37d-44c5-acc7-e1274af302cf",
        "description": "",
        "categories": ["clothes", "men", "pants"],
        "features": {
            "brand": "adidas",
            "size": "M",
            "color": "black"
        }
    },
    {
        "name": "Adidas Short 1",
        "productType": "short",
        "rating": 5,
        "price": 45,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/adidas-short-1.jpg?alt=media&token=fe251497-a7d7-4de2-adc7-f0a92ed47184",
        "description": "A new summer short from adidas for men",
        "categories": ["clothes", "men", "shorts"],
        "features": {
            "brand": "adidas",
            "size": "s",
            "color": "white"
        }
    },
    {
        "name": "Adidas T-shirt 1",
        "productType": "t-shirt",
        "rating": 5,
        "price": 59,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/adidas-tshirt-1.jpg?alt=media&token=9ab6b79f-eea1-4b95-b09f-6350e15659da",
        "description": "",
        "categories": ["clothes", "men", "t-shirts"],
        "features": {
            "brand": "adidas",
            "size": "s",
            "color": "white"
        }
    },
    {
        "name": "Adidas T-shirt 2",
        "productType": "t-shirt",
        "rating": 5,
        "price": 29,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/adidas-tshirt-2.jpg?alt=media&token=a8166f52-04e4-48a2-90a5-2be67c911c37",
        "description": "",
        "categories": ["clothes", "men", "t-shirts"],
        "features": {
            "size": "m",
            "color": "red"
        }
    },
    {
        "name": "Adidas T-shirt 3",
        "productType": "t-shirt",
        "rating": 5,
        "price": 69,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/adidas-tshirt-3.jpg?alt=media&token=fd9abeb1-a2eb-4fc7-8917-ebffa5cd3b0e",
        "description": "",
        "categories": ["clothes", "men", "t-shirts"],
        "features": {
            "size": "m",
            "color": "grey"
        }
    },


    {
        "name": "Anti Shock for Samsung Galaxy s20 Ultra",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-s20-ultra.jpg?alt=media&token=9e0c0934-07b8-4486-b4ad-933618af55db",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "samsung galaxy s20 ultra",
            "color": "transparent"
        }
    },

    {
        "name": "Anti Shock for Samsung Galaxy a30",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-a30.jpg?alt=media&token=6549b669-1a05-47ac-98f9-71ea17538a8f",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "samsung galaxy a30",
            "color": "transparent"
        }
    },

    {
        "name": "Anti Shock for Apple IPhone 12",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-iphone-12.jpg?alt=media&token=5b0618b8-6369-44b6-8742-2bc4ef04bdb0",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "apple iphone 12",
            "color": "transparent"
        }
    },

    {
        "name": "Anti Shock for Xioami Redmi note 8 pro",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-redmi-note-8-pro.jpg?alt=media&token=514abe3b-d5d9-4be4-9fe1-39885cc2944e",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "xioami redmi note 8 pro",
            "color": "transparent"
        }
    },

    {
        "name": "Anti Shock for Samsung Galaxy s10 plus",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-s10-plus.jpg?alt=media&token=cb912509-66a5-4386-be6b-64fcd0e8b914",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "samsung galaxy s10 plus",
            "color": "transparent"
        }
    },

    {
        "name": "Anti Shock for LG V30",
        "productType": "Anti Shock",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-lg-v30.jpg?alt=media&token=83d1baf9-4fa1-4e5e-873e-5cc2e37be28c",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "features": {
            "for": "lg v30 ",
            "color": "orange"
        }
    },

    {
        "name": "Anti Shock for OnePlus 8 Pro",
        "productType": "Anti Shock",
        "description": "",
        "categories": ["electronics accessoires", "anti shocks"],
        "price": 12,
        "rating": 5,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/for-oneplus-8pro.png?alt=media&token=5ebee44a-2fdf-403f-8583-509deee151c5",
        "features": {
            "for": "oneplus 8 pro",
            "color": "transparent"
        }
    },

    {
        "name": "Huawei Charger USB Type C",
        "productType": "Charger",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/Huawei-USB-Type-C-2A-5V.jpg?alt=media&token=21f7db86-ee6d-4598-9f9d-6ecf989cd4e1",
        "description": "",
        "categories": ["electronics accessoires", "chargers"],
        "features": {
            "brand": "huawei",
            "cableType": "usb type c",
            "voltage": 5,
            "current": 2
        }
    },
    {
        "name": "Samsung Charger USB Micro B",
        "productType": "Charger",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/Samsung-Micro-B-2A-5V.jpg?alt=media&token=0c7aa4e3-18f9-448d-b192-111f3b3508a0",
        "description": "",
        "categories": ["electronics accessoires", "chargers"],
        "features": {
            "brand": "samsung",
            "cableType": "usb micro b",
            "voltage": 5,
            "current": 2
        }
    },
    {
        "name": "Samsung Charger USB Type C",
        "productType": "Charger",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/Samsung-Type-C-2A-5V.jpg?alt=media&token=2f0df0a5-4e68-42c2-8731-33c44f360590",
        "description": "",
        "categories": ["electronics accessoires", "chargers"],
        "features": {
            "brand": "samsung",
            "cableType": "usb type c",
            "voltage": 5,
            "current": 2
        }
    },
    {
        "name": "Apple Charger Ligntning",
        "productType": "Charger",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/Apple-Lightning-2A-5V.png?alt=media&token=e4dfde06-6c47-4ae7-a074-4841b9aaa76c",
        "description": "",
        "categories": ["electronics accessoires", "chargers"],
        "features": {
            "brand": "huawei",
            "cableType": "ligntning",
            "voltage": 10,
            "current": 2
        }
    },



    
    {
        "name": "Wired Headphone Black Dragon",
        "productType": "Headphone",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/headphone-black-dragon.jpg?alt=media&token=cd6ea2b0-8506-4ee2-8442-ea5424a13298",
        "description": "",
        "categories": ["electronics accessoires", "headphones"],
        "features": {
            "brand": "black dragon",
            "wireless": false,
            "color": "black"
        }
    },

    {
        "name": "Wireless Headphone Fresh Rabel",
        "productType": "Headphone",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/headphone-fresh-rabel.jpg?alt=media&token=51312df0-c516-4ccf-8d02-478363d1c976",
        "description": "",
        "categories": ["electronics accessoires", "headphones"],
        "features": {
            "brand": "fresh rabel",
            "wireless": true,
            "color": "blue"
        }
    },

    {
        "name": "Wired Earphone Sony",
        "productType": "Earphone",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/earphone-sony-1.jpg?alt=media&token=be6f5bb5-5c1f-4911-bee7-d0e6341f050f",
        "description": "",
        "categories": ["electronics accessoires", "earphones"],
        "features": {
            "brand": "sony",
            "wireless": false,
            "color": "black"
        }
    },

    {
        "name": "Wireless Headphone Sony",
        "productType": "Headphone",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/headphone-sony-1.jpg?alt=media&token=3a0c1df8-85cd-44ab-98ce-c9b1663eb33d",
        "description": "",
        "categories": ["electronics accessoires", "headphones"],
        "features": {
            "brand": "sony",
            "wireless": true,
            "color": "black"
        }
    },



    {
        "name": "Gucci Bloom parfum For women",
        "productType": "parfum",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/gucci-blom-woman.jpeg?alt=media&token=b0df8a29-697a-43d6-bb93-94705046464d",
        "description": "Gucci Bloom Women parfum with pink bottle has 90ml",
        "categories": ["cosmetics and beauty & fashion", "women", "parfums"],
        "features": {
            "brand": "gucci",
            "capacity": 90
        }
    },

    {
        "name": "Chanel Paris N*5 parfum For women",
        "productType": "parfum",
        "rating": 5,
        "price": 12,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/chanel-woman.png?alt=media&token=c0c321f8-5ee9-4198-9c51-1df17465a6ae",
        "description": "Chanel Paris Women parfum has 90ml",
        "categories": ["cosmetics and beauty & fashion", "women", "parfums"],
        "features": {
            "brand": "chanel",
            "capacity": 90
        }
    },

    {
        "name": "Blue de Chanel parfum For men",
        "productType": "parfum",
        "rating": 5,
        "price": 129,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/bleu-de-chanel-parfum-man.png?alt=media&token=9385ead8-f067-4a1e-9c7a-0174d15cfff9",
        "description": "Blue de Chanel Men parfum has 60ml",
        "categories": ["cosmetics and beauty & fashion", "men", "parfums"],
        "features": {
            "brand": "blue de chanel",
            "capacity": 60
        }
    },

    {
        "name": "Hugo Boss parfum For men",
        "productType": "parfum",
        "rating": 5,
        "price": 149,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/boss-man.jpg?alt=media&token=8d171cc5-14be-4837-95f4-0613f9707227",
        "description": "Hugo boss Men parfum has 70ml",
        "categories": ["cosmetics and beauty & fashion", "men", "parfums"],
        "features": {
            "brand": "hugo boss",
            "capacity": 70
        }
    },

    {
        "name": "Black Gold parfum For men",
        "productType": "parfum",
        "rating": 5,
        "price": 99,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/black-gold-man.jpg?alt=media&token=c6735062-9e8c-4f5a-acd9-806e90997553",
        "description": "Black Gold Men parfum has 30ml",
        "categories": ["cosmetics and beauty & fashion", "men", "parfums"],
        "features": {
            "brand": "miss dior",
            "capacity": 30
        }
    },

    {
        "name": "Festina Silver Watch for men",
        "productType": "Watch",
        "rating": 5,
        "price": 399,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/man-fastina-1.png?alt=media&token=806c6263-8849-4fef-bf51-2e2081376a29",
        "description": "",
        "categories": ["fashion", "men", "watches"],
        "features": {
            "brand": "festina",
            "color": "silver",
            "waterResistance": true
        }
    },

    {
        "name": "Megalith Watch for men",
        "productType": "Watch",
        "rating": 5,
        "price": 299,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/man-megalith-1.jpg?alt=media&token=f787625a-8a6c-4ef6-a06f-b7e31f4eb152",
        "description": "",
        "categories": ["fashion", "men", "watches"],
        "features": {
            "brand": "megalith",
            "color": "blue",
            "waterResistance": true
        }
    },

    {
        "name": "Fossil Watch for men",
        "productType": "Watch",
        "rating": 5,
        "price": 399,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/man-fossil-1.jpg?alt=media&token=c2834ddd-1162-4011-b466-e12f562e59bc",
        "description": "",
        "categories": ["fashion", "men", "watches"],
        "features": {
            "brand": "fossil",
            "color": "brown",
            "waterResistance": false
        }
    },
    {
        "name": "7 Seven Watch for women",
        "productType": "Watch",
        "rating": 5,
        "price": 340,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/woman-7seven-1.jpg?alt=media&token=331d9378-e9fa-45b8-a53b-c0feec16888d",
        "description": "",
        "categories": ["fashion", "women", "watches"],
        "features": {
            "brand": "seven",
            "color": "violet",
            "waterResistance": false
        }
    },
    {
        "name": "Titan Watch for women",
        "productType": "Watch",
        "rating": 5,
        "price": 225,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/woman-titan-1.jpg?alt=media&token=075df5d5-a524-4574-864e-8d4fc03058a0",
        "description": "",
        "categories": ["fashion", "women", "watches"],
        "features": {
            "brand": "titan",
            "color": "gold",
            "waterResistance": true
        }
    },

    {
        "name": "Lige Watch for women",
        "productType": "Watch",
        "rating": 5,
        "price": 150,
        "qty": 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/woman-lige-1.jpg?alt=media&token=8e75c1d2-b28c-41cb-a65d-d2c7a94781cf",
        "description": "",
        "categories": ["fashion", "women", "watches"],
        "features": {
            "brand": "lige",
            "color": ["gold", "silver"],
            "waterResistance": true
        }
    }

]