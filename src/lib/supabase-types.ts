export interface VideoData {
  id: string;
  title: string;
  description: string;
  youtube_id: string;
  tags: { [key: string]: string[] };
  category: string;
  created_at: string;
}

export interface TagGroup {
  id: string;
  name: string;
  tags: string[];
  category: string;
  created_at: string;
}