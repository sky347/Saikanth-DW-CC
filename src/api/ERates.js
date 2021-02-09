export const getERates = async () => {
  try {
    const res = await fetch("https://api.exchangeratesapi.io/latest");
    return await res.json();
  } catch (e) {
    console.error(e);
  }
};
