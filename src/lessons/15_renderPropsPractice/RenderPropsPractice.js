import DataFetcher from './DataFetcher';

const RenderPropsPractice = () =>
  <div>
    <DataFetcher url='https://swapi.dev/api/people/1'>
      {(isLoading, data) => isLoading ?
        <h1>Loading...</h1> :
        <p>{JSON.stringify(data)}</p>}
    </DataFetcher>
  </div>;

export default RenderPropsPractice;