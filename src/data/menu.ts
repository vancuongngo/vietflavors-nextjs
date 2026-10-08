export interface MenuItem {
  name: string;
  spicy: boolean;
  /** Price in SEK */
  price: number;
  description: string;
  /** File name (no extension) under /public/images/menu */
  image: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

/** Full menu, grouped by category (menu page). */
export const menuSections: MenuSection[] = [
  {
    "title": "Gỏi (Vietnamesisk sallad)",
    "items": [
      {
        "name": "Gỏi Tôm (Glutenfri)",
        "spicy": true,
        "price": 155,
        "description": "Handskalade räkor med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
        "image": "1-goi-tom"
      },
      {
        "name": "Gỏi Gà (Glutenfri)",
        "spicy": true,
        "price": 149,
        "description": "Kycklinglårfilé med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
        "image": "2-goi-ga"
      },
      {
        "name": "Gỏi Bò (Glutenfri)",
        "spicy": true,
        "price": 149,
        "description": "Biff med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
        "image": "3-goi-bo"
      },
      {
        "name": "Gỏi Cuốn",
        "spicy": false,
        "price": 149,
        "description": "Traditionella färska vårrullar med ägg, risnudlar, sallad, morötter, mango och mynta Serveras med sallad, rostad lök, jordnötter och hoisinsås Välj mellan handskalade räkor, kyckling eller tofu",
        "image": "4-goi-cuon"
      }
    ]
  },
  {
    "title": "Bún (Nudlar)",
    "items": [
      {
        "name": "Bún Gà",
        "spicy": false,
        "price": 149,
        "description": "Kycklinglårfilé marinerad med vitlök, ostronsås, honung, citrongräs, gurkmeja och citronblad Serveras med säsongens sallad, risnudlar och fisksås",
        "image": "5-bun-ga"
      },
      {
        "name": "Bún Thịt Xá Xíu",
        "spicy": false,
        "price": 149,
        "description": "Vietnamesisk BBQ style fläskkarré Serveras med risnudlar, säsongens sallad och fisksås",
        "image": "6-bun-thit-xa-xiu"
      },
      {
        "name": "Bún Chả Giò (Mix)",
        "spicy": false,
        "price": 155,
        "description": "Två frasiga friterade vårrullar och stekt fläskkarré i marinad med ostronsås, honung, citrongräs, lök och vitlök Serveras med ekologisk småbladsmix, risnudlar och fisksås",
        "image": "7-bun-cha-gio-mix"
      },
      {
        "name": "Bún Bò Nam Bộ",
        "spicy": false,
        "price": 149,
        "description": "Wok med lök, vitlök, böngroddar, purjolök, citrongräs och koriander Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås Välj mellan biff, kyckling eller tofu",
        "image": "9-bun-bo-nam-bo"
      },
      {
        "name": "Bún Thịt Nướng",
        "spicy": false,
        "price": 149,
        "description": "Grillad fläskkarré marinerad med ostronsås, honung, citrongräs, lök och vitlök Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås",
        "image": "10-bun-thit-nuong"
      },
      {
        "name": "Bún Nem (Glutenfri)",
        "spicy": false,
        "price": 149,
        "description": "Frasiga, friterade vårrullar med mungbönor, taro, spetskål, morötter, lök och skogssvamp Serveras med risnudlar, sallad och fisksås Välj mellan traditionell eller vegetarisk",
        "image": "12-bun-nem"
      }
    ]
  },
  {
    "title": "Andra specialrätter",
    "items": [
      {
        "name": "Bánh Mì",
        "spicy": false,
        "price": 129,
        "description": "Vietnamesisk baguette med gurka, koriander och chilisås Serveras med sallad, inlagda morötter och rättika Välj mellan biff, kyckling, grillad fläskkarré, fläskkarré BBQ Style eller tofu",
        "image": "8-banh-mi"
      },
      {
        "name": "Phở Xào Gà",
        "spicy": false,
        "price": 149,
        "description": "Wokade stora risnudlar med ägg, kinakål, morötter, purjolök, vitlök, lök och koriander Serveras med sallad, rostad lök och soja Välj mellan biff, kyckling eller tofu",
        "image": "11-pho-xao-ga"
      },
      {
        "name": "Mì Xào Bò",
        "spicy": false,
        "price": 149,
        "description": "Wokade äggnudlar med ägg, lök, vitlök, kinakål, morötter, purjolök och koriander Serveras med sallad och soja Välj mellan biff, kyckling eller räkor",
        "image": "13-mi-xao-bo"
      },
      {
        "name": "Phở (Glutenfri)",
        "spicy": false,
        "price": 149,
        "description": "Klassisk vietnamesisk soppa med risnudlar, böngroddar, vårlök och koriander Välj mellan biff, kyckling, räkor eller tofu",
        "image": "14-pho"
      },
      {
        "name": "Bánh Xèo",
        "spicy": false,
        "price": 149,
        "description": "Frasig crêpe med handskalade räkor och kyckling, böngroddar, lök och koriander Serveras med sallad och fisksås",
        "image": "20-banh-xeo"
      },
      {
        "name": "Bò Lúc Lắc",
        "spicy": false,
        "price": 165,
        "description": "Wokad ryggbiff marinerad med ostronsås, soja, lök, vitlök och koriander Serveras med ris, wokad paprika, sallad och soja",
        "image": "15-bo-luc-lac"
      },
      {
        "name": "Vịt Xào Sả Ớt",
        "spicy": true,
        "price": 165,
        "description": "Wokad ankfilé med ostronsås, citrongräs, paprika, lök, vitlök och koriander Serveras med ris, sallad och soja",
        "image": "16-vit-xao-xa-ot"
      },
      {
        "name": "Cá Hồi Nướng Sả Ớt",
        "spicy": true,
        "price": 165,
        "description": "Grillad laxfilé marinerad med ostronsås, citrongräs, chili, lök och vitlök Serveras med ris, wokad paprika, sallad och soja",
        "image": "17-ca-hoi-nuong-xa-ot"
      },
      {
        "name": "Tôm Xào Rau",
        "spicy": true,
        "price": 149,
        "description": "Wok med säsongens grönsaker, ostronsås, chili, lök och vitlök Serveras med ris, sallad och soja Välj mellan biff, kyckling eller räkor",
        "image": "18-tom-xao-rau"
      },
      {
        "name": "Cơm Chiên Gà",
        "spicy": false,
        "price": 149,
        "description": "Stekt ris med ägg, lök, vitlök, morötter, majs, ärtor, vårlök och koriander Serveras med sallad och soja Välj mellan biff, kyckling, räkor eller tofu",
        "image": "19-com-chien-ga"
      }
    ]
  }
];

/** Home page teaser: two columns of dishes. */
export const homeMenuColumns: MenuItem[][] = [
  [
    {
      "name": "Gỏi Tôm (Glutenfri)",
      "spicy": true,
      "price": 155,
      "description": "Handskalade räkor med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      "image": "1-goi-tom"
    },
    {
      "name": "Gỏi Gà (Glutenfri)",
      "spicy": true,
      "price": 149,
      "description": "Kycklinglårfilé med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      "image": "2-goi-ga"
    },
    {
      "name": "Gỏi Bò (Glutenfri)",
      "spicy": true,
      "price": 149,
      "description": "Biff med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      "image": "3-goi-bo"
    },
    {
      "name": "Gỏi Cuốn",
      "spicy": false,
      "price": 149,
      "description": "Traditionella färska vårrullar med ägg, risnudlar, sallad, morötter, mango och mynta Serveras med sallad, rostad lök, jordnötter och hoisinsås Välj mellan handskalade räkor, kyckling eller tofu",
      "image": "4-goi-cuon"
    },
    {
      "name": "Bún Gà",
      "spicy": false,
      "price": 149,
      "description": "Kycklinglårfilé marinerad med vitlök, ostronsås, honung, citrongräs, gurkmeja och citronblad Serveras med säsongens sallad, risnudlar och fisksås",
      "image": "5-bun-ga"
    },
    {
      "name": "Bún Thịt Xá Xíu",
      "spicy": false,
      "price": 149,
      "description": "Vietnamesisk BBQ style fläskkarré Serveras med risnudlar, säsongens sallad och fisksås",
      "image": "6-bun-thit-xa-xiu"
    },
    {
      "name": "Bún Chả Giò (Mix)",
      "spicy": false,
      "price": 155,
      "description": "Två frasiga friterade vårrullar och stekt fläskkarré i marinad med ostronsås, honung, citrongräs, lök och vitlök Serveras med ekologisk småbladsmix, risnudlar och fisksås",
      "image": "7-bun-cha-gio-mix"
    },
    {
      "name": "Bánh Mì",
      "spicy": false,
      "price": 129,
      "description": "Vietnamesisk baguette med gurka, koriander och chilisås Serveras med sallad, inlagda morötter och rättika Välj mellan biff, kyckling, grillad fläskkarré, fläskkarré BBQ Style eller tofu",
      "image": "8-banh-mi"
    },
    {
      "name": "Bún Bò Nam Bộ",
      "spicy": false,
      "price": 149,
      "description": "Wok med lök, vitlök, böngroddar, purjolök, citrongräs och koriander Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås Välj mellan biff, kyckling eller tofu",
      "image": "9-bun-bo-nam-bo"
    },
    {
      "name": "Bún Thịt Nướng",
      "spicy": false,
      "price": 149,
      "description": "Grillad fläskkarré marinerad med ostronsås, honung, citrongräs, lök och vitlök Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås",
      "image": "10-bun-thit-nuong"
    }
  ],
  [
    {
      "name": "Phở Xào Gà",
      "spicy": false,
      "price": 149,
      "description": "Wokade stora risnudlar med ägg, kinakål, morötter, purjolök, vitlök, lök, koriander och böngroddar Serveras med sallad, rostad lök och soja Välj mellan biff, kyckling eller tofu",
      "image": "11-pho-xao-ga"
    },
    {
      "name": "Bún Nem (Glutenfri)",
      "spicy": false,
      "price": 149,
      "description": "Frasiga, friterade vårrullar med mungbönor, taro, spetskål, morötter, lök och skogssvamp Serveras med risnudlar, sallad och fisksås Välj mellan traditionell eller vegetarisk",
      "image": "12-bun-nem"
    },
    {
      "name": "Mì Xào Bò",
      "spicy": false,
      "price": 149,
      "description": "Wokade äggnudlar med ägg, lök, vitlök, kinakål, morötter, purjolök och koriander Serveras med sallad och soja Välj mellan biff, kyckling eller räkor",
      "image": "13-mi-xao-bo"
    },
    {
      "name": "Phở (Glutenfri)",
      "spicy": false,
      "price": 149,
      "description": "Klassisk vietnamesisk soppa med risnudlar, böngroddar, vårlök och koriander Välj mellan biff, kyckling, räkor eller tofu",
      "image": "14-pho"
    },
    {
      "name": "Bò Lúc Lắc",
      "spicy": false,
      "price": 165,
      "description": "Wokad ryggbiff marinerad med ostronsås, soja, lök, vitlök och koriander Serveras med ris, wokad paprika, sallad och soja",
      "image": "15-bo-luc-lac"
    },
    {
      "name": "Vịt Xào Sả Ớt",
      "spicy": true,
      "price": 165,
      "description": "Wokad ankfilé med ostronsås, citrongräs, paprika, lök, vitlök och koriander Serveras med ris, sallad och soja",
      "image": "16-vit-xao-xa-ot"
    },
    {
      "name": "Cá Hồi Nướng Sả Ớt",
      "spicy": true,
      "price": 165,
      "description": "Grillad laxfilé marinerad med ostronsås, citrongräs, chili, lök och vitlök Serveras med ris, wokad paprika, sallad och soja",
      "image": "17-ca-hoi-nuong-xa-ot"
    },
    {
      "name": "Tôm Xào Rau",
      "spicy": true,
      "price": 149,
      "description": "Wok med säsongens grönsaker, ostronsås, chili, lök och vitlök Serveras med ris, sallad och soja Välj mellan biff, kyckling eller räkor",
      "image": "18-tom-xao-rau"
    },
    {
      "name": "Cơm Chiên Gà",
      "spicy": false,
      "price": 149,
      "description": "Stekt ris med ägg, lök, vitlök, morötter, majs, ärtor, vårlök och koriander Serveras med sallad och soja Välj mellan biff, kyckling, räkor eller tofu",
      "image": "19-com-chien-ga"
    },
    {
      "name": "Bánh Xèo",
      "spicy": false,
      "price": 149,
      "description": "Frasig crêpe med handskalade räkor och kyckling, böngroddar, lök och koriander Serveras med sallad och fisksås",
      "image": "20-banh-xeo"
    }
  ]
];
