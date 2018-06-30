import { Item } from './models/item.model';

export const items: Item[] = [{
  id: 1,
  title: 'Madrid',
  subtitle: 'Spain',
  // tslint:disable-next-line:max-line-length
  description: 'Madrid is the capital of Spain and the largest municipality in both the Community of Madrid and Spain as a whole. The city has almost 3.2 million inhabitants with a metropolitan area population of approximately 6.5 million. It is the third-largest city in the European Union (EU) after London and Berlin, and its monocentric metropolitan area is the third-largest in the EU after those of London and Paris.The municipality itself covers an area of 604.3 km2.',
  // tslint:disable-next-line:max-line-length
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gran_V%C3%ADa_%28Madrid%29_1.jpg/1200px-Gran_V%C3%ADa_%28Madrid%29_1.jpg',
  disabled: false
},
  {
    id: 2,
    title: 'Palma de Mallorca',
    subtitle: 'Spain',
    // tslint:disable-next-line:max-line-length
    description: 'Palma de Mallorca, frequently used name for the city of Palma[2] (/ˈpɑːlmə/ or /ˈpɑːmə/, Catalan: [ˈpalmə], Spanish: [ˈpalma]), is the capital and largest city of the autonomous community of the Balearic Islands in Spain.[3] It is situated on the south coast of Mallorca on the Bay of Palma. The Cabrera Archipelago, though widely separated from Palma proper, is administratively considered part of the municipality. As of 2018, Palma de Mallorca Airport serves over 29 million passengers per year.',
    // tslint:disable-next-line:max-line-length
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/14-01-24-%D0%BF%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8_%D0%B2_%D0%9F%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0-%D0%B4%D0%B5-%D0%9C%D0%B0%D0%B9%D0%BE%D1%80%D0%BA%D0%B0-RalfR-DSCN1215-140.jpg/500px-14-01-24-%D0%BF%D0%B5%D1%80%D0%B5%D0%B9%D1%82%D0%B8_%D0%B2_%D0%9F%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0-%D0%B4%D0%B5-%D0%9C%D0%B0%D0%B9%D0%BE%D1%80%D0%BA%D0%B0-RalfR-DSCN1215-140.jpg',
    disabled: false
  },
  {
    id: 3,
    title: 'New York',
    subtitle: 'USA',
    // tslint:disable-next-line:max-line-length
    description: 'The City of New York, often called New York City (NYC) or simply New York, is the most populous city in the United States. With an estimated 2017 population of 8,622,698 distributed over a land area of about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world\'s most populous megacities, with an estimated 20,320,876 people in its 2017 Metropolitan Statistical Area and 23,876,155 residents in its Combined Statistical Area. A global power city, New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce,  entertainment, research, technology, education, politics, tourism, and sports. The city\'s fast pace defines the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Top_of_Rock_Cropped.jpg/300px-Top_of_Rock_Cropped.jpg',
    disabled: true
  },
  {
    id: 4,
    title: 'San Francisco',
    subtitle: 'USA',
    // tslint:disable-next-line:max-line-length
    description: 'San Francisco, officially the City and County of San Francisco, is the cultural, commercial, and financial center of Northern California. It covers an area of about 46.89 square miles (121.4 km2),[18] mostly at the north end of the San Francisco Peninsula in the San Francisco Bay Area. San Francisco is the fourth most-populous city in California and the 13th most-populous in the United States, with a 2017 census-estimated population of 884,363. The consolidated city-county is also the fifth most densely-populated US county, behind only four of the five New York City boroughs. As of 2016, it was the seventh highest-income county in the US, with a per capita personal income of $110,418.',
    // tslint:disable-next-line:max-line-length
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/San_Francisco_from_Twin_Peaks_September_2013_panorama_5_edit.jpg/1000px-San_Francisco_from_Twin_Peaks_September_2013_panorama_5_edit.jpg',
    disabled: false
  }];
