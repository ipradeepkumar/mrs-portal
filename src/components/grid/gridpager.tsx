import Button from 'react-bootstrap/Button';


function GridPager(props: any){
    return(
        <div style={{ display:'flex', flexDirection:'row'}}>
        <div><Button size='sm' variant='dark'
            className="border rounded p-1"
            onClick={() => props.table.firstPage()}
            disabled={!props.table.getCanPreviousPage()}
          >
            {'<<'}
          </Button></div>
        <div> <Button size='sm' variant='dark'
            className="border rounded p-1"
            onClick={() => props.table.previousPage()}
            disabled={!props.table.getCanPreviousPage()}
          >
            {'<'}
          </Button></div>
        <div> <Button size='sm' variant='dark'
            className="border rounded p-1"
            onClick={() => props.table.nextPage()}
            disabled={!props.table.getCanNextPage()}
          >
            {'>'}
          </Button></div>
         
       <div>
       <Button size='sm' variant='dark'
            className="border rounded p-1"
            onClick={() => props.table.lastPage()}
            disabled={!props.table.getCanNextPage()}
          >
            {'>>'}
          </Button>
       </div>
          <div className=''>
          <span className="flex items-center">
            Page
            <strong>
              {props.table.getState().pagination.pageIndex + 1} of{' '}
              {props.table.getPageCount().toLocaleString()}
            </strong>
          </span></div>
          <div className='vr'></div>
          <div>
          Showing {props.table.getRowModel().rows.length.toLocaleString()} of{' '}
          {props.table.getRowCount().toLocaleString()} Rows
          </div>
          <div style={{ display:'flex', float:'right' }}>
          <span className="flex items-center">
            Go to page:
            <input
              type="number"
              defaultValue={props.table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                props.table.setPageIndex(page)
              }}
              className="border rounded" style={{ width: '50px' }}
            />
          </span>
          <select
            value={props.table.getState().pagination.pageSize}
            onChange={e => {
              props.table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select></div>
        </div>
    );
}

export default GridPager;