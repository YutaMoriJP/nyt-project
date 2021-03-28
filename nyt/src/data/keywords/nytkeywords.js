import { v4 as uuidv4 } from "uuid";

const keywords = [
  "sport",
  "art",
  "news",
  "technology",
  "entertainment",
  "education",
  "international",
  "weather",
  "business",
  "trading",
  "science",
];

const keywordCollection = keywords.map(keyword => ({ keyword, id: uuidv4() }));

export default keywordCollection;
