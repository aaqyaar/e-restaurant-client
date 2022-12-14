import { Drawer } from 'components';

function App() {
  return (
    <div className="h-screen bg-gray-900">
      <Drawer width={'300px'} height={'100%'} open={true} position={'left'}>
        <div className="h-full w-full text-white">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="text-2xl font-bold">Drawer</div>
            <button className="text-2xl font-bold lg:hidden block">X</button>
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="text-2xl font-bold">Drawer Content</div>
          </div>

          <div className="absolute bottom-6 w-full">
            <div className="border-b-2 border-gray-600 mb-4" />
            <div className="flex items-center justify-start px-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
              <div className="">
                <h2>John Doe</h2>
                <span className="text-gray-500">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
