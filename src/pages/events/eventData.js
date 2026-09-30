export const eventFolders = [
  {
    id: "yoga-day",
    title: "International Yoga Day",
    folder: "yoga day",
    date: "Event Gallery",
    description: "Moments from the college's Yoga Day activities and student participation.",
  },
  {
    id: "vruksharopan",
    title: "Vruksharopan Programme",
    folder: "vruksharopan",
    date: "Event Gallery",
    description: "Photographs from the tree plantation and environmental awareness programme.",
  },
  {
    id: "nutrition-day",
    title: "Nutrition Day",
    folder: "nutrition day",
    date: "Event Gallery",
    description: "Highlights from the nutrition-focused student activities and demonstrations.",
  },
  {
    id: "nursing-day",
    title: "Nursing Day",
    folder: "nursing day",
    date: "Event Gallery",
    description: "A collection of photographs from Nursing Day celebrations and activities.",
  },
];

export const eventImagePaths = (folder) =>
  Array.from({ length: 10 }, (_, index) =>
    `/assets/images/events/${encodeURIComponent(folder)}/${String(index + 1).padStart(2, "0")}.jpg`
  );
