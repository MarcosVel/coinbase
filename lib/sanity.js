import SanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: '27cbiw2u',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'skGEzO0opyJYbRloZUWOwoLt2JuVR4aUZmjuN6nfGQhhDa7F0kUmCWV32wYvNN2kROHVeKYwkRXuHAlclyCutlCbc52FsRwd91emXwiW2A4HzUXPnZr2xXghQR54EdTcBKziWM4O0CdehFCa3vSMP7CQco0yRfRu5lU579qQVwm20PvEgRvT',
  useCdn: false,
})