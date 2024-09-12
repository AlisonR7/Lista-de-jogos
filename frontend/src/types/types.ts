
export interface Game {
  valor: any;
  id?: number;
  title: string;
  description: string;
  genre: string;
  releaseDate: string;
  isMultiplayer: boolean;
 
}

export interface GameFormProps {
  initialData?: Game;
  onSubmit: (data: Game) => void;
}


export interface GameListProps {
  games: Game[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}


export interface GamePageProps {
  game: Game;
}
