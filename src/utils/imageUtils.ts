import axios from "axios";

export const urlToBase64 = async () => {
  try {
    const response = await axios.get(
      // "https://cdn-icons-png.flaticon.com/512/4437/4437654.png",
      "images/store.png",
      { responseType: "arraybuffer" }
    );
    return `data:image/png;base64,${Buffer.from(
      response.data,
      "binary"
    ).toString("base64")}`;
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createCustomIcon = (base64: any, frameColor: string = "#4CAF50") => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 60 80">
      <defs>
        <clipPath id="circleClip">
          <circle cx="30" cy="30" r="25" fill="white" />
        </clipPath>
      </defs>
      <path d="M30 0c16.57 0 30 13.43 30 30 0 20-30 40-30 40S0 50 0 30C0 13.43 13.43 0 30 0z" fill="${frameColor}" />
      <image href="${base64}" 
      x="10" y="10" width="40" height="40" clip-path="url(#circleClip)" />
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};