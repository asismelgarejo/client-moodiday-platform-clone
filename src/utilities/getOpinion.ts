enum Rating {
  loved = "loved",
  enjoyed = "enjoyed",
}
export const getOpinion = (v: string): string => {
  return Rating[v as Rating][0].toUpperCase() + v.slice(1);
};
export const getOpinionColor = (v: string): string => {
  switch (v) {
    case Rating.enjoyed:
      return "bg-lime-500";
    case Rating.loved:
      return "bg-lime-800";
    default:
      return "";
  }
};
