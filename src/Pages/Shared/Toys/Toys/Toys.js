import useToys from '../../../../hooks/useToys';
import Toy from '../Toy/Toy';

const Toys = () => {
    // const [toys, setToys] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8000/toys')
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])
    const { toys } = useToys();
    return (
        <div className="mt-52 mb-40 container mx-auto">
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