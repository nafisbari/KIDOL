import useToys from '../../../hooks/useToys';
import Toy from '../Toy/Toy';
import { Link } from 'react-router-dom';
const Toys = () => {
    const { toys } = useToys();
    return (
        <div className="mt-52 mb-40 container mx-auto">
            <div className="mx-auto mb-16 w-1/2">
                <Link to='/allToys'><h1 className="font-fredoka text-4xl text-colorGray text-center hover:text-colorPink transform transition duration 700 w-1/2 mx-auto mb-8">
                    Trending Products
                </h1></Link>
                <p className="text-lg font-rubik text-center mb-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti fugit maiores voluptatem perferendis! </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                {
                    toys.slice(0, 6).map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    />
                    )
                }

            </div>

        </div>
    );
};

export default Toys;