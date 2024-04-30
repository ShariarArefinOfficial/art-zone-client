
const Catagories = () => {
    return (
        <div className="my-10">
            <div className="flex justify-center items-center">
                All Categories
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center">Landscape Painting</p>
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center">Portrait Drawing</p>
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center">Watercolour Painting</p>
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center"> Oil Painting</p>
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center">Charcoal Sketching</p>
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <p className="text-blue-500 text-center">Cartoon Drawing</p>
                </div>

            </div>
        </div>
    );
};

export default Catagories;