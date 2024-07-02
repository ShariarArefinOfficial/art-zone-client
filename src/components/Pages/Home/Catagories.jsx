import { Link } from "react-router-dom";

const Catagories = () => {
    const Landscape='Landscape Painting'
    return (
        <div className="my-10">
            <div className="flex justify-center items-center">
                All Categories
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="p-5 border-2 rounded-xl">
                    
                    <Link to='/craft/categories/LandScape'>
                    <p className="text-blue-500 text-center">Landscape Painting</p>
                    </Link>
                    
                    
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <Link to='/craft/categories/Portrait'>
                    <p className="text-blue-500 text-center">Portrait Drawing</p>
                    </Link>
                    
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <Link to='/craft/categories/Watercolour'>
                    <p className="text-blue-500 text-center">Watercolour Painting</p>
                    </Link>
                    
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <Link to='/craft/categories/oil'>
                    <p className="text-blue-500 text-center"> Oil Painting</p>
                    </Link>
                    
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <Link to='/craft/categories/Charcoal'>
                    <p className="text-blue-500 text-center">Charcoal Sketching</p>
                    </Link>
                    
                </div>
                <div className="p-5 border-2 rounded-xl">
                    <Link to='/craft/categories/Cartoon'>
                    <p className="text-blue-500 text-center">Cartoon Drawing</p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Catagories;