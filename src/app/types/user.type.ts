export interface User {
  level?: string;
  profile: {
    userId: number;
    nickname: string;
    avatarUrl: string;
    backgroundUrl: string;
  };
}
