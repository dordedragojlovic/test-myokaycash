export interface ActivityData {
    id: number;
    date: string;
    item: string;
    type: string;
    price: string;
    positive: boolean;
    time: string;
  };

export interface ActivityArrayProps {
    data: Array<ActivityData>
};