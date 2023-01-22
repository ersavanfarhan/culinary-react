export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

export const URL_Image = "https://ersavanfarhan.github.io/culinary-react/images/"
