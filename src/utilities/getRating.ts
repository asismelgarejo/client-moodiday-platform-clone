enum Rating {
  Loved = "Loved",
}
export const getRating = (v: number): Rating => {
  return Rating["Loved"];
};
export const getRatingColor = (v: number): string => {
  switch (true) {
    case v <= 2: return "bg-lime-800";
    case v <= 4: return "bg-lime-500 hover:bg-lime-600";
    case v <= 6: return "bg-lime-800";
    case v <= 8: return "bg-lime-800";
    case v <= 10: return "bg-lime-800";
    default: return ""
  }
};
