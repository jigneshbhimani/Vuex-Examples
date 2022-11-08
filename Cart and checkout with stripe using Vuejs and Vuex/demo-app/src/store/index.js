import Vue from "vue";
import Vuex from "vuex";

// Electronics
import mobile from "../assets/products/mobile.jpg";
import ac from "../assets/products/ac.jpg";
import buds from "../assets/products/buds.jpg";
import charger from "../assets/products/charger.jpg";
import fan from "../assets/products/fan.jpg";
import fridge from "../assets/products/fridge.jpg";
import laptop from "../assets/products/laptop.jpg";
import mixer from "../assets/products/mixer.jpg";
import oven from "../assets/products/oven.jpg";
import sm from "../assets/products/sm.jpg";
import tag from "../assets/products/tag.jpg";
import tv from "../assets/products/tv.jpg";
import ucb from "../assets/products/ucb.jpg";
import watch from "../assets/products/watch.jpg";
import wm from "../assets/products/wm.jpg";

// Clothes
import jeans from "../assets/clothes/jeans.jpg";
import cap from "../assets/clothes/cap.jpg";
import shirt from "../assets/clothes/shirt.jpg";
import tshirt from "../assets/clothes/tshirt.jpg";
import jacket from "../assets/clothes/jacket.jpg";
import dress from "../assets/clothes/dress.jpg";
import hoodie from "../assets/clothes/hoodie.jpg";
import blazzer from "../assets/clothes/blazzer.jpg";

// Books
import harry1 from "../assets/books/harry1.jpg";
import man from "../assets/books/man.jpg";
import sun from "../assets/books/sun.jpg";
import finn from "../assets/books/finn.png";
import lord from "../assets/books/lord.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Mobile",
        price: "55999",
        company: "Apple",
        description: "Apple iPhone 13",
        color: "Starlight",
        size: "512GB",
        imageURL: mobile,
      },
      {
        id: 2,
        title: "TV",
        price: "30999",
        company: "Sony",
        description:
          "Sony Bravia 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility",
        color: "Black",
        size: "139 cm (55 inches)",
        imageURL: tv,
      },
      {
        id: 3,
        title: "Washing Machine",
        price: "13999",
        company: "LG",
        description:
          "LG Inverter Touch Control Fully-Automatic Front Load Washing Machine with Heater (FHM1207SDL, Silver, 6 Motion Direct Drive)",
        color: "Gray",
        size: "7 kg",
        imageURL: wm,
      },
      {
        id: 4,
        title: "Refrigerator",
        price: "18999",
        company: "Samsung",
        description:
          "Samsung 4 Star Inverter Direct Cool Single Door Refrigerator(RR23A2F3X9U/HL, Paradise Blue, Base Stand with Drawer, Digi-Touch Cool)",
        color: "Gray-White",
        size: "225 L",
        imageURL: fridge,
      },
      {
        id: 5,
        title: "Laptop",
        price: "45999",
        company: "Dell",
        description:
          "Intel PQC-N5030, Win11 + Office'21, 8GB GDDR4, 256GB SSD HD AG (D560756WIN9BE, 1.61Kgs)",
        color: "Black",
        size: "15.6 (39.62Cms)",
        imageURL: laptop,
      },
      {
        id: 6,
        title: "Fan",
        price: "2499",
        company: "Luminous",
        description: "Luminous Dhoom 70-Watt High Speed Ceiling Fan (Brown)",
        color: "Light-Brown",
        size: "1200mm",
        imageURL: fan,
      },
      {
        id: 7,
        title: "AC",
        price: "30999",
        company: "Mitsubishi",
        description:
          "Mitsubishi Heavy Industries 3 Star Non Inverter Split AC (SRK20CSS-S6, White)",
        color: "White",
        size: "1.6 Ton",
        imageURL: ac,
      },
      {
        id: 8,
        title: "Microwave Oven",
        price: "4799",
        company: "Bajaj",
        description: "Bajaj MTBX 2016 20L Grill Microwave Oven, Black",
        color: "Black",
        size: "5 kg",
        imageURL: oven,
      },
      {
        id: 9,
        title: "Mixer Grinder",
        price: "3296",
        company: "Prestige",
        description: "Prestige IRIS Plus 750 watt mixer grinder",
        color: "White",
        size: "3 liter",
        imageURL: mixer,
      },
      {
        id: 10,
        title: "Sandwich Maker",
        price: "1675",
        company: "Havells",
        description: "Havells Sandwich Maker (2372) 700-Watt (White)",
        color: "Gray-White",
        size: "2 kg",
        imageURL: sm,
      },
      {
        id: 11,
        title: "Earbuds",
        price: "5999",
        company: "Skullcandy",
        description:
          "Skullcandy Indy Evo Truly Wireless Bluetooth in Ear Earbuds with Mic",
        color: "Blue",
        size: "100 gm",
        imageURL: buds,
      },
      {
        id: 12,
        title: "Charger",
        price: "1899",
        company: "Apple",
        description: "Apple USB-C Power Adapter (for iPhone, iPad & AirPods)",
        color: "White",
        size: "20W",
        imageURL: charger,
      },
      {
        id: 13,
        title: "AirTag",
        price: "3190",
        company: "Apple",
        description: "Apple AirTag",
        color: "White",
        size: "1.41 Ounces",
        imageURL: tag,
      },
      {
        id: 14,
        title: "USB C Connector Splitter",
        price: "199",
        company: "Samsung",
        description:
          "Type-C to 3.5 MM for Samsung Galaxy S Light Luxury Type-C to 3.5 MM Audio Jack Adapter Converter for CDLA Type",
        color: "White",
        size: "3.5 mm",
        imageURL: ucb,
      },
      {
        id: 15,
        title: "Apple Watch",
        price: "44900",
        company: "Apple",
        description: "Apple Watch Series 6",
        color: "Blue",
        size: "25 mm",
        imageURL: watch,
      },
    ],
    clothes: [
      {
        id: 1,
        name: "Shirt",
        price: "3999",
        brand: "Mango",
        color: "Red-White",
        size: "M",
        imageURL: shirt,
      },
      {
        id: 2,
        name: "T-Shirt",
        price: "1799",
        brand: "Jack & Jones",
        color: "Grey",
        size: "L",
        imageURL: tshirt,
      },
      {
        id: 3,
        name: "Cap",
        price: "999",
        brand: "Nike",
        color: "Red",
        size: "25",
        imageURL: cap,
      },
      {
        id: 4,
        name: "Jeans",
        price: "1599",
        brand: "Levi's",
        color: "Blue",
        size: "30",
        imageURL: jeans,
      },
      {
        id: 5,
        name: "Jacket",
        price: "2999",
        brand: "Roadster",
        color: "Blue-Black",
        size: "XL",
        imageURL: jacket,
      },
      {
        id: 6,
        name: "Hoodie",
        price: "1199",
        brand: "Adidas",
        color: "Green",
        size: "L",
        imageURL: hoodie,
      },
      {
        id: 7,
        name: "Blazzer",
        price: "4199",
        brand: "Louis Philippe",
        color: "Brown",
        size: "XXL",
        imageURL: blazzer,
      },
      {
        id: 8,
        name: "Dress",
        price: "1699",
        brand: "H&M",
        color: "Red",
        size: "34",
        imageURL: dress,
      },
    ],
    books: [
      {
        id: 1,
        name: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        price: "3000",
        imageURL: harry1,
        published: "11 January 1994"
      },
      {
        id: 2,
        name: "Invisible Man",
        author: "Ralph Ellison",
        price: "2400",
        imageURL: man,
        published: "14 April 1952"
      },
      {
        id: 3,
        name: "The Sun Also Rises",
        author: "Ernest Hemingway",
        price: "2499",
        imageURL: sun,
        published: "1 January 1970"
      },
      {
        id: 4,
        name: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        price: "1799",
        imageURL: finn,
        published: "15 March 1964"
      },
      {
        id: 5,
        name: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        price: "2199",
        imageURL: lord,
        published: "24 November 1998"
      },
    ],
    cartItemCount: 0,
    cartItems: [],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === item.id);
        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id === payload.id);
        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);
          if (state.cartItems[index]["qunatity"] !== 0) {
            state.cartItems[index]["quantity"] -= 1;
            state.cartItemCount--;
          }
          if (state.cartItems[index]["quantity"] === 0) {
            state.cartItems.splice(index, 1);
          }
        }
      }
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
  modules: {},
});
