export interface Category {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  _count: {
    medicines: number;
  };
}

export type CategoryResponse = {
  categories: Category[];
  total: number;
  limit: number;
  curretPage: number;
  totalPage: number;
};
