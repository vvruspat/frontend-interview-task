import { ISODate } from './iso-string';
import { TSentiment } from './sentiment.type';
import { TTheme } from './theme.type';

export type TFeedbackItem = {
  id: number;
  comment: string;
  created_at: ISODate;
  themes: Array<{
    sentiment: TSentiment,
    theme_id: TTheme['id'],
  }>;
}
