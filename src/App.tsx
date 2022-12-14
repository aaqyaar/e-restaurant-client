import { Drawer } from 'components';

function App() {
  return (
    <div className="h-screen bg-gray-900">
      <Drawer width={'300px'} height={'100%'} open={true} position={'right'}>
        <div className="h-full w-full text-white">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="text-2xl font-bold">Drawer</div>
            <button className="text-2xl font-bold lg:hidden block">X</button>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="text-2xl font-bold">Drawer Content</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
