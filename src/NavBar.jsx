const NavBar = ({totalCount}) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <button type='button' className='btn btn-primary position-relative'>
                    Inbox
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        {totalCount}
                        <span className='visually-hidden'>unread messages</span>
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
