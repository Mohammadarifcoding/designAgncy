

const Container = ({children}) => {
    return (
        <div className="max-w-[1440px] lg:px-10 m:px-6 px-4 mx-auto p">
            {children}
        </div>
    );
};

export default Container;