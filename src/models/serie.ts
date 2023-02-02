/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};

export type ProtoSerieStructure = {
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export type SerieStructure = HasId & ProtoSerieStructure;

export class Serie implements SerieStructure {
  public watched: boolean;
  public score: number;
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public emmies: number
  ) {
    this.watched = false;
    this.score = 0;
  }
}
