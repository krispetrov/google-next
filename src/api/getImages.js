const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CONTEXT_KEY = process.env.NEXT_PUBLIC_CONTEXT_KEY;

export const imageSearchAPI = async (term, index) => {

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&searchType=image&start=${index}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Something went wrong");
  }
};
