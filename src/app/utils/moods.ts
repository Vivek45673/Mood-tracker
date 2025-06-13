// utils/moods.ts

export type MoodEntry = {
  mood: 'Happy' | 'Neutral' | 'Sad';
  comment?: string;
  time: string;
};

export const moods: MoodEntry[] = [];
