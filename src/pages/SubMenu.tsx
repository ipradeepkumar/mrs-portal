import { ContentHeader } from '@components';
import { Column, Formatters, GridOption, SlickgridReact, SlickgridReactInstance } from 'slickgrid-react';

interface Props { }

interface State {
  title: string;
  subTitle: string;
  gridOptions1?: GridOption;
  gridOptions2?: GridOption;
  columnDefinitions1: Column[];
  columnDefinitions2: Column[];
  dataset1: any[];
  dataset2: any[];
}

const SubMenu = () => {
  const dataset1:any[] = [];

  const columns: Column[] = [
    { id: 'title', name: 'Title', field: 'title', sortable: true, minWidth: 100 },
    { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, minWidth: 100 },
    { id: '%', name: '% Complete', field: 'percentComplete', sortable: true, minWidth: 100 },
    { id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso },
    { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso },
    { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true, minWidth: 100 }
  ];
  // this._darkModeGrid1 = this.isBrowserDarkModeEnabled();
  const gridOptions1: GridOption = {
    //darkMode: this._darkModeGrid1,
    //gridHeight: 225,
    gridWidth: 800,
    enableAutoResize: false,
    enableSorting: true
  };

  
  return (
    <div>
      <ContentHeader title="SubMenu Page" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
              <SlickgridReact gridId="grid1"
            columnDefinitions={columns}
            gridOptions={gridOptions1!}
            dataset={dataset1}
            />
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
