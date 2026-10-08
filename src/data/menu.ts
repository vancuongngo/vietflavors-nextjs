export interface Dish {
  /** Unique, URL-safe identifier. */
  id: string;
  /** Dish number; also the prefix of its image file (`{no}-{id}.webp`). */
  no: number;
  name: string;
  spicy: boolean;
  /** Price in SEK. */
  price: number;
  description: string;
}

export interface MenuSection {
  id: "goi" | "bun" | "specials";
  title: string;
  dishes: Dish[];
}

export const menuSections: MenuSection[] = [
  {
    id: "goi",
    title: "Gỏi (Vietnamesisk sallad)",
    dishes: [
      {
        id: "goi-tom",
        no: 1,
        name: "Gỏi Tôm (Glutenfri)",
        spicy: true,
        price: 155,
        description:
          "Handskalade räkor med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      },
      {
        id: "goi-ga",
        no: 2,
        name: "Gỏi Gà (Glutenfri)",
        spicy: true,
        price: 149,
        description:
          "Kycklinglårfilé med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      },
      {
        id: "goi-bo",
        no: 3,
        name: "Gỏi Bò (Glutenfri)",
        spicy: true,
        price: 149,
        description:
          "Biff med säsongens sallad, spetskål, morötter, koriander och mynta Serveras med glasnudlar och fisksås",
      },
      {
        id: "goi-cuon",
        no: 4,
        name: "Gỏi Cuốn",
        spicy: false,
        price: 149,
        description:
          "Traditionella färska vårrullar med ägg, risnudlar, sallad, morötter, mango och mynta Serveras med sallad, rostad lök, jordnötter och hoisinsås Välj mellan handskalade räkor, kyckling eller tofu",
      },
    ],
  },
  {
    id: "bun",
    title: "Bún (Nudlar)",
    dishes: [
      {
        id: "bun-ga",
        no: 5,
        name: "Bún Gà",
        spicy: false,
        price: 149,
        description:
          "Kycklinglårfilé marinerad med vitlök, ostronsås, honung, citrongräs, gurkmeja och citronblad Serveras med säsongens sallad, risnudlar och fisksås",
      },
      {
        id: "bun-thit-xa-xiu",
        no: 6,
        name: "Bún Thịt Xá Xíu",
        spicy: false,
        price: 149,
        description:
          "Vietnamesisk BBQ style fläskkarré Serveras med risnudlar, säsongens sallad och fisksås",
      },
      {
        id: "bun-cha-gio-mix",
        no: 7,
        name: "Bún Chả Giò (Mix)",
        spicy: false,
        price: 155,
        description:
          "Två frasiga friterade vårrullar och stekt fläskkarré i marinad med ostronsås, honung, citrongräs, lök och vitlök Serveras med ekologisk småbladsmix, risnudlar och fisksås",
      },
      {
        id: "bun-bo-nam-bo",
        no: 9,
        name: "Bún Bò Nam Bộ",
        spicy: false,
        price: 149,
        description:
          "Wok med lök, vitlök, böngroddar, purjolök, citrongräs och koriander Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås Välj mellan biff, kyckling eller tofu",
      },
      {
        id: "bun-thit-nuong",
        no: 10,
        name: "Bún Thịt Nướng",
        spicy: false,
        price: 149,
        description:
          "Grillad fläskkarré marinerad med ostronsås, honung, citrongräs, lök och vitlök Serveras med risnudlar, sallad, rostad lök, jordnötter och fisksås",
      },
      {
        id: "bun-nem",
        no: 12,
        name: "Bún Nem (Glutenfri)",
        spicy: false,
        price: 149,
        description:
          "Frasiga, friterade vårrullar med mungbönor, taro, spetskål, morötter, lök och skogssvamp Serveras med risnudlar, sallad och fisksås Välj mellan traditionell eller vegetarisk",
      },
    ],
  },
  {
    id: "specials",
    title: "Andra specialrätter",
    dishes: [
      {
        id: "banh-mi",
        no: 8,
        name: "Bánh Mì",
        spicy: false,
        price: 129,
        description:
          "Vietnamesisk baguette med gurka, koriander och chilisås Serveras med sallad, inlagda morötter och rättika Välj mellan biff, kyckling, grillad fläskkarré, fläskkarré BBQ Style eller tofu",
      },
      {
        id: "pho-xao-ga",
        no: 11,
        name: "Phở Xào Gà",
        spicy: false,
        price: 149,
        description:
          "Wokade stora risnudlar med ägg, kinakål, morötter, purjolök, vitlök, lök och koriander Serveras med sallad, rostad lök och soja Välj mellan biff, kyckling eller tofu",
      },
      {
        id: "mi-xao-bo",
        no: 13,
        name: "Mì Xào Bò",
        spicy: false,
        price: 149,
        description:
          "Wokade äggnudlar med ägg, lök, vitlök, kinakål, morötter, purjolök och koriander Serveras med sallad och soja Välj mellan biff, kyckling eller räkor",
      },
      {
        id: "pho",
        no: 14,
        name: "Phở (Glutenfri)",
        spicy: false,
        price: 149,
        description:
          "Klassisk vietnamesisk soppa med risnudlar, böngroddar, vårlök och koriander Välj mellan biff, kyckling, räkor eller tofu",
      },
      {
        id: "banh-xeo",
        no: 20,
        name: "Bánh Xèo",
        spicy: false,
        price: 149,
        description:
          "Frasig crêpe med handskalade räkor och kyckling, böngroddar, lök och koriander Serveras med sallad och fisksås",
      },
      {
        id: "bo-luc-lac",
        no: 15,
        name: "Bò Lúc Lắc",
        spicy: false,
        price: 165,
        description:
          "Wokad ryggbiff marinerad med ostronsås, soja, lök, vitlök och koriander Serveras med ris, wokad paprika, sallad och soja",
      },
      {
        id: "vit-xao-xa-ot",
        no: 16,
        name: "Vịt Xào Sả Ớt",
        spicy: true,
        price: 165,
        description:
          "Wokad ankfilé med ostronsås, citrongräs, paprika, lök, vitlök och koriander Serveras med ris, sallad och soja",
      },
      {
        id: "ca-hoi-nuong-xa-ot",
        no: 17,
        name: "Cá Hồi Nướng Sả Ớt",
        spicy: true,
        price: 165,
        description:
          "Grillad laxfilé marinerad med ostronsås, citrongräs, chili, lök och vitlök Serveras med ris, wokad paprika, sallad och soja",
      },
      {
        id: "tom-xao-rau",
        no: 18,
        name: "Tôm Xào Rau",
        spicy: true,
        price: 149,
        description:
          "Wok med säsongens grönsaker, ostronsås, chili, lök och vitlök Serveras med ris, sallad och soja Välj mellan biff, kyckling eller räkor",
      },
      {
        id: "com-chien-ga",
        no: 19,
        name: "Cơm Chiên Gà",
        spicy: false,
        price: 149,
        description:
          "Stekt ris med ägg, lök, vitlök, morötter, majs, ärtor, vårlök och koriander Serveras med sallad och soja Välj mellan biff, kyckling, räkor eller tofu",
      },
    ],
  },
];

export function getSection(id: MenuSection["id"]): MenuSection {
  const section = menuSections.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown menu section: ${id}`);
  return section;
}

/** Every dish across all sections, ordered by dish number. */
export const allDishes: Dish[] = menuSections.flatMap((s) => s.dishes).sort((a, b) => a.no - b.no);

/** Path (under /public) of a dish's photo. */
export const dishImagePath = (dish: Pick<Dish, "no" | "id">) =>
  `/images/menu/${dish.no}-${dish.id}.webp`;
