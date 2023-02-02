/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { SerieStructure } from '../../models/serieStructure';
// Import { TaskStorageRepo } from '../../services/repository/task.storage.repo';
import { Add } from '../add/add';
import { Serie } from '../serie/serie';
import { Component } from '../component/component';

export class Series extends Component {
  public series: SerieStructure[];
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  addSerie(serie: SerieStructure) {
    this.series = [...this.series, serie];
    this.render('afterbegin');
  }

  deleteSerie(id: SerieStructure['id']) {
    this.series = this.tasks.filter((item) => item.id !== id);
    this.render('afterbegin');
  }

  updateTask(task: SerieStructure) {
    this.series = this.series.map((item) =>
      item.id === task.id ? task : item
    );
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('.series-list--watched') as HTMLElement).innerHTML =
      '';
    super.render(place);
    new Add('.series', this.addSerie.bind(this));
    this.series.forEach((item) => {
      new Serie(
        '.series-watched>ul',
        item,
        this.deleteSerie.bind(this),
        this.updateSerie.bind(this)
      );
    });
  }

  createTemplate() {
    return `<section class="tasks"><ul></ul></section>`;
  }
}
