export type GetComments = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
}

export type AddNewComment = {
  comment: string
  rating: number
}

export type errorAddComment = {
  error: string;
};
