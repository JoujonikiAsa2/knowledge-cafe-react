import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className="text-3xl font-bold">Knolegde Cafe</h1>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;